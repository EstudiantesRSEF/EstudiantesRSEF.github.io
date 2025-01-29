import json
from bokeh.plotting import figure, show
from bokeh.models import GeoJSONDataSource, ColumnDataSource, HoverTool, Div, CustomJS, WheelZoomTool
from bokeh.layouts import row, column
from bokeh.io import output_file, save
import math

width = 600
height = 400
# width = 320
# height = 320


# Load regions GeoJSON data (for boundaries)
with open(r"PreliminaresPLANCKS/2025/Mapa/spainMapsDivisions.json", "r", encoding="utf-8") as f:
    regions_geojson = json.load(f)
regions_source = GeoJSONDataSource(geojson=json.dumps(regions_geojson))

# Load university data JSON
with open(r"PreliminaresPLANCKS/2025/Mapa/universities_data.json", "r", encoding="utf-8") as f:
    university_data = json.load(f)

# Add a sample team list to each university for demonstration
for item in university_data:
    item["team_list"] = [f"Team {i}" for i in range(1, item["teams"] + 1)]

# Prepare the university data
universities_source = ColumnDataSource(data=dict(
    longitude=[item["longitude"] for item in university_data],
    latitude=[item["latitude"] for item in university_data],
    teams=[item["teams"] for item in university_data],
    size=[math.log(item["teams"] + 1) * 8 for item in university_data],  # Logarithmic scaling for size
    university=[item["university"] for item in university_data],
    team_list=["<ul>" + "".join(f"<li style='width: 50%; float: left;'>{team}</li>" if len(item["team_list"]) > 10 else f"<li>{team}</li>" 
for team in item["team_list"]) + "</ul>" for item in university_data],  # Two-column format if more than 10 teams
))

# Compute general statistics
num_universities = len(university_data)
total_teams = sum(item["teams"] for item in university_data)

# Create a Bokeh figure
p = figure(
    title="Equipos Inscritos por Universidad",
    width=width,
    height=height,
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
points = p.circle(
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

# Layout the map and the Div to the right
# layout = row(p, div)
layout = column(p, div)

# Show the plot
output_file(r"PreliminaresPLANCKS/2025/Mapa/universities_map_desktop.html", title="Mapa de Universidades")

# Save the plot and layout as an HTML file
save(layout)
show(layout)
