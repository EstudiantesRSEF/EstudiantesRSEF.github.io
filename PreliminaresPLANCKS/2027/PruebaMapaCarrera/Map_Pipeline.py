from Map_Functions import get_google_sheet_data,load_json, filter_universities, generate_university_maps, list_processing, generate_race_data

spreadsheet_id = '1zb6UrHOUOfCkk7eJwE0iA4UoG2NySX34MRwNg8nWLak'
api_key = 'AIzaSyA20q0RD66mntBrw3uUFeyBboos3zpjn1k'
sheet_name = "Hoja 1"

dict_path = r"/workspaces/EstudiantesRSEF.github.io/PreliminaresPLANCKS/2027/PruebaMapaCarrera/university_dic.json"  
university_data_path = r"/workspaces/EstudiantesRSEF.github.io/PreliminaresPLANCKS/2027/PruebaMapaCarrera/universities_data.json"
race_data_path = r"/workspaces/EstudiantesRSEF.github.io/PreliminaresPLANCKS/2027/PruebaMapaCarrera/carrera_data.json"

sheet_data = get_google_sheet_data(spreadsheet_id,sheet_name, api_key)


try:
    useful_info = list_processing([entry for entry in sheet_data["values"][3:] if entry and any(cell.strip() for cell in entry if cell)])
    print("Sheet succesfully read")    
    print(useful_info)    
    # print(type(useful_info[1][3]))
except:
    print("Failed to fetch data from Google Sheets API.")

else:    
    data_dict = load_json(dict_path)
    print("Dictionary read")
    
    filter_universities(useful_info, data_dict, output_file=university_data_path)
    generate_race_data(useful_info, output_file=race_data_path)

    generate_university_maps(university_data_path)

