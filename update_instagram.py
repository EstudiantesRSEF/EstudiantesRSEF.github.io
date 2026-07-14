import json
import os
import shutil
import requests
import instaloader

def fetch_instagram_posts():
    L = instaloader.Instaloader()
    USER = "estudiantesrsef" # <-- Cambia esto por tu usuario
    FOLDER_NAME = "instagram_posts"
    
    # 1. LIMPIEZA: Si la carpeta ya existe, la borramos con todo lo que tenga dentro
    if os.path.exists(FOLDER_NAME):
        shutil.rmtree(FOLDER_NAME)
        print(f"Carpeta antigua '{FOLDER_NAME}' eliminada.")
        
    # Creamos la carpeta totalmente vacía de nuevo
    os.makedirs(FOLDER_NAME)
    print(f"Carpeta nueva '{FOLDER_NAME}' creada con éxito.")

    try:
        profile = instaloader.Profile.from_username(L.context, USER)
        posts_data = []
        
        for count, post in enumerate(profile.get_posts()):
            if count >= 3:
                break
                
            # Definimos un nombre de archivo fijo para cada posición (0, 1 y 2)
            filename = f"post_{count}.jpg"
            local_filepath = os.path.join(FOLDER_NAME, filename)
            
            # Descargar físicamente la imagen de los servidores de Instagram
            print(f"Descargando imagen {count} desde Instagram...")
            img_data = requests.get(post.url).content
            with open(local_filepath, 'wb') as handler:
                handler.write(img_data)
            
            # Guardamos la ruta LOCAL en el JSON, ya no la URL externa de Instagram
            posts_data.append({
                "url": f"https://www.instagram.com/p/{post.shortcode}/",
                "image_path": f"{FOLDER_NAME}/{filename}", # Ruta relativa que usará el HTML
                "caption": post.caption if post.caption else "",
                "date": post.date_utc.strftime("%Y-%m-%d %H:%M:%S")
            })
            
        # Guardar el archivo JSON de configuración
        with open("instagram.json", "w", encoding="utf-8") as f:
            json.dump(posts_data, f, ensure_ascii=False, indent=4)
            
        print("¡Proceso completado! Imágenes y JSON actualizados.")
        
    except Exception as e:
        print(f"Error durante la automatización: {e}")

if __name__ == "__main__":
    fetch_instagram_posts()