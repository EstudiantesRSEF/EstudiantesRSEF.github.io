import requests
import json
from bokeh.plotting import figure, show
from bokeh.models import GeoJSONDataSource, ColumnDataSource, HoverTool, Div, CustomJS, WheelZoomTool, Model
from bokeh.layouts import row, column
from bokeh.io import output_file, save, curdoc
import math
import re
import logging

def get_google_sheet_data(spreadsheet_id,sheet_name, api_key):
    # Construct the URL for the Google Sheets API
    url = f'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheet_id}/values/{sheet_name}!A1:Z?alt=json&key={api_key}'

    try:
        # Make a GET request to retrieve data from the Google Sheets API
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors

        # Parse the JSON response
        data = response.json()
        return data

    except requests.exceptions.RequestException as e:
        # Handle any errors that occur during the request
        print(f"An error occurred: {e}")
        return None

def list_from_string(string: str):
    pattern = r'"([^"]*)"'
    extracted_items = re.findall(pattern, string)
    return extracted_items

def list_processing(data: list):
    processed_data = []
    for row in data:
        if len(row) > 3:  # Check if the fourth element exists
            try:
                # Safely evaluate the string as a Python list
                row[3] = list_from_string(row[3])
            except (ValueError, SyntaxError):
                pass  # Leave it as is if it cannot be evaluated
        processed_data.append(row)
    return processed_data

def load_json(file_path):
    """
    Loads a JSON file and returns it as a Python dictionary.
    """
    with open(file_path, "r", encoding="utf-8") as file:
        data = json.load(file)
    return data

def filter_universities(data_list, university_dict, output_file="filtered_universities.json"):
    """
    Processes a list of university entries and saves the filtered data to a JSON file.
    """
    filtered_data = []
    
    for entry in data_list:
        uni_abbr = entry[1]  # University abbreviation
        num_teams = int(entry[2])  # Convert number of teams to integer

        if uni_abbr not in university_dict:
            logging.warning("""
                            *****************************************************
                            University abbreviation '%s' not found in university dictionary. 
                            Skipping entry: %s
                            *****************************************************""", uni_abbr, entry)
            continue  # Skip processing this entry
        
        if num_teams > 0:
            team_list = [entry[3].strip('[]').strip('f"').strip('"')] if isinstance(entry[3], str) else entry[3]
            filtered_data.append({
                "university": university_dict[uni_abbr]["university"],
                "longitude": university_dict[uni_abbr]["longitude"],
                "latitude": university_dict[uni_abbr]["latitude"],
                "teams": num_teams,
                "team_list": team_list
            })
    
    with open(output_file, "w", encoding="utf-8") as outfile:
        json.dump(filtered_data, outfile, indent=4, ensure_ascii=False)
    
    print(f"Filtered universities saved to {output_file}")

def generate_university_maps(university_data_path):
    """
    Generates and saves university maps for both mobile and desktop versions.
    Returns the file paths for both versions.
    """
    # Load regions GeoJSON data (for boundaries)
    with open(r"/workspaces/EstudiantesRSEF.github.io/PreliminaresPLANCKS/2025/Mapa/spainMapsDivisions.json", "r", encoding="utf-8") as f:
        regions_geojson = json.load(f)
    regions_source = GeoJSONDataSource(geojson=json.dumps(regions_geojson))

    # Load university data JSON
    with open(university_data_path, "r", encoding="utf-8") as f:
        university_data = json.load(f)

    # Prepare the university data
    universities_source = ColumnDataSource(data=dict(
        longitude=[item["longitude"] for item in university_data],
        latitude=[item["latitude"] for item in university_data],
        teams=[item["teams"] for item in university_data],
        size=[math.log(item["teams"] + 1) * 8 for item in university_data],  # Logarithmic scaling for size
        university=[item["university"] for item in university_data],
        team_list=["<ul>" + "".join(f"<li style='width: 50%; float: left;'>{team}</li>" if len(item["team_list"]) > 10 else f"<li>{team}</li>" for team in item["team_list"]) + "</ul>" for item in university_data],  # Two-column format if more than 10 teams
    ))
    
    # Compute general statistics
    num_universities = len(university_data)
    total_teams = sum(item["teams"] for item in university_data)

    file_paths = {}

    for mobile in [True, False]:
        width = 320 if mobile else 600
        height = 320 if mobile else 400

        # Create a Bokeh figure
        p = figure(
            title="Equipos Inscritos por Universidad",
            width=width,
            height=width,
            active_drag = "pan",
            active_scroll="wheel_zoom", active_tap="tap",  # Set wheel zoom as the active tool
            tools="wheel_zoom, tap, pan",  # Disable all tools menu
            x_axis_location=None,
            y_axis_location=None,    
            toolbar_location = None,
            )

        p.title.text_font_size = "18px"
        p.title.align = "center"

        p.grid.grid_line_color = None

        # Add region boundaries as polygons
        p.patches(
            xs="xs", ys="ys",
            source=regions_source,
            line_color="black",
            fill_color="lightblue",
            line_width=0.5,
            hover_line_color=None,  # Disable hover for lines
        )

        # Add university data as points
        points = p.scatter(
            x="longitude", y="latitude",
            source=universities_source,
            size="size",  # Circle size based on the number of teams
            color="red",
            fill_alpha=0.6,
            line_color="black",
        )

        # Add a HoverTool for points only
        hover = HoverTool(
            renderers=[points],  # Attach hover only to the points
            tooltips=[("Universidad", "@university"), ("Equipos", "@teams")],
        )
        p.add_tools(hover)

        # Create a Div to display the clicked university's teams with stats at the top
        div = Div(width=320, height=height, text=f"""
                <div style='padding: 20px; font-size: 16px;'>
                <b style='font-size: 20px'>Universidades:</b> {num_universities}<br>
                <b style='font-size: 20px'>Equipos:</b> {total_teams}</b><br><br>
                    Haz click en una universidad para ver los equipos.</div>
                    """)

        # Add a CustomJS callback to handle selection events
        callback = CustomJS(args=dict(source=universities_source, div=div), code="""
            const indices = source.selected.indices;
            if (indices.length > 0) {
                const index = indices[0];
                const university = source.data['university'][index];
                const teams = source.data['team_list'][index];
                div.text = `<div style='padding: 20px; font-size: 16px;'>` +
                        `<b style='font-size: 20px;'>Universidades:</b> ${source.data['university'].length}<br>` +
                        `<b style='font-size: 20px;'>Equipos:</b> ${source.data['teams'].reduce((a, b) => a + b, 0)}<br><br>` +
                        `<b>${university}</b><br>${teams}</div>`;
            } else {
                div.text = `<div style='padding: 20px; font-size: 16px;'>` +
                        `<b style='font-size: 20px;'>Universidades:</b> ${source.data['university'].length}<br>` +
                        `<b style='font-size: 20px;'>Equipos:</b> ${source.data['teams'].reduce((a, b) => a + b, 0)}<br><br>` +
                        "Haz click en una universidad para ver los equipos";
            }
        """)
        # Customize the WheelZoomTool
        zoom_tool = WheelZoomTool(speed=0.001)  # Lower values make the zoom slower
        p.add_tools(zoom_tool)

        # Remove the default zoom tool and add the customized one
        p.toolbar.active_scroll = zoom_tool

        # Attach the callback to the points
        points.data_source.selected.js_on_change("indices", callback)

        layout = column(p, div) if mobile else row(p, div)

        file_option = "mobile" if mobile else "desktop"
        file_name = rf"/workspaces/EstudiantesRSEF.github.io/PreliminaresPLANCKS/2025/Mapa/universities_map_{file_option}.html"
        output_file(file_name, title="Mapa de Universidades")

        # Save the plot and layout as an HTML file
        save(layout)
        show(layout)      

        for model in p.select({'type': Model}):
            prev_doc = model.document
            model._document = None
            if prev_doc:
                prev_doc.remove_root(model)

        file_paths["mobile" if mobile else "desktop"] = file_name
    
    print("Generated maps:")
    for key, path in file_paths.items():
        print(f"{key.capitalize()} version: {path}")



