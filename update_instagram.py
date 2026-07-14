import json
import os
import shutil
import requests
import instaloader

def fetch_instagram_posts():
    L = instaloader.Instaloader()
    USER = "estudiantesrsef"  # Tu usuario configurado
    FINAL_FOLDER = "instagram_posts"
    TEMP_FOLDER = "temp_instagram_posts"
    
    # 1. Creamos una carpeta temporal LIMPIA para trabajar sin tocar lo antiguo
    if os.path.exists(TEMP_FOLDER):
        shutil.rmtree(TEMP_FOLDER)
    os.makedirs(TEMP_FOLDER)
    print("Iniciando descarga en carpeta temporal...")

    try:
        profile = instaloader.Profile.from_username(L.context, USER)
        posts_data = []
        
        for count, post in enumerate(profile.get_posts()):
            if count >= 3:
                break
                
            filename = f"post_{count}.jpg"
            temp_filepath = os.path.join(TEMP_FOLDER, filename)
            
            # Intentamos descargar la foto de Instagram
            print(f"Descargando imagen {count}...")
            response = requests.get(post.url, timeout=10) # 10 seg de límite
            response.raise_for_status() # Lanza error si la descarga falló
            
            with open(temp_filepath, 'wb') as handler:
                handler.write(response.content)
            
            posts_data.append({
                "url": f"https://www.instagram.com/p/{post.shortcode}/",
                "image_path": f"{FINAL_FOLDER}/{filename}",
                "caption": post.caption if post.caption else "",
                "date": post.date_utc.strftime("%Y-%m-%d %H:%M:%S")
            })
            
        # 2. VERIFICACIÓN: ¿Hemos conseguido realmente las 3 fotos?
        if len(posts_data) == 3:
            print("¡Descarga con éxito! Reemplazando las fotos antiguas...")
            
            # Ahora sí, borramos la carpeta vieja y renombramos la temporal como la definitiva
            if os.path.exists(FINAL_FOLDER):
                shutil.rmtree(FINAL_FOLDER)
            os.rename(TEMP_FOLDER, FINAL_FOLDER)
            
            # Actualizamos el JSON solo cuando sabemos que las imágenes ya están listas
            with open("instagram.json", "w", encoding="utf-8") as f:
                json.dump(posts_data, f, ensure_ascii=False, indent=4)
                
            print("¡Feed de Instagram actualizado de forma segura!")
        else:
            raise Exception("No se pudieron obtener las 3 publicaciones necesarias.")
        
    except Exception as e:
        print(f"⚠️ ERROR: Algo falló con Instagram ({e}).")
        print("🛡️ MANTENIENDO LAS FOTOS ANTIGUAS. No se modificará la web.")
        # Limpiamos los restos del intento fallido
        if os.path.exists(TEMP_FOLDER):
            shutil.rmtree(TEMP_FOLDER)
        # FORZAMOS el error para que GitHub Actions se detenga aquí y no intente subir carpetas vacías
        exit(1)

if __name__ == "__main__":
    fetch_instagram_posts()
