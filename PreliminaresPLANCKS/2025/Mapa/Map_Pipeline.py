from Map_Functions import get_google_sheet_data,load_json, filter_universities, generate_university_maps, list_processing

spreadsheet_id = '16A04FRRVfy10ar0haUjdd1oN_zUZN6BvmZ7gOXxgWVg'
api_key = 'AIzaSyCs0CmME6XNhtE7j5f_njKqdVl6X0gUWc0'
sheet_name = "Web"

dict_path = r"/workspaces/EstudiantesRSEF.github.io/PreliminaresPLANCKS/2025/Mapa/university_dic.json"  
university_data_path = r"/workspaces/EstudiantesRSEF.github.io/PreliminaresPLANCKS/2025/Mapa/universities_data.json"

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

    generate_university_maps(university_data_path)

