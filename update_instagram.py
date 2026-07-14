import json
import os
import shutil
import requests
import instaloader

def fetch_instagram_posts():
    L = instaloader.Instaloader()
    
    # TRUCO 1: Disfrazamos a Instaloader como si fuera un navegador normal en Mac/Windows
    L.context._session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    })
    
    USER = "estudiantesrsef"
    FINAL_FOLDER = "instagram_posts"
    TEMP_FOLDER = "temp_instagram_posts"
    
    if os.path.exists(TEMP_FOLDER):
        shutil.rmtree(TEMP_FOLDER)
    os.makedirs(TEMP_FOLDER)
    print("Iniciando descarga en carpeta temporal...")

    try:
        print(f"Conectando con el perfil @{USER}...")
        profile = instaloader.Profile.from_username(L.context, USER)
        posts_data = []
        
        # TRUCO 2: Disfrazamos también la descarga directa de las imágenes con requests
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
        
        for count, post in enumerate(profile.get_posts()):
            if count >= 3:
                break
                
            filename = f"post_{count}.jpg"
            temp_filepath = os.path.join(TEMP_FOLDER, filename)
            
            print(f"Descargando imagen {count} (URL: {post.shortcode})...")
            # Aumentamos el timeout a 20 segundos para que no aborte si va lento
            response = requests.get(post.url, headers=headers, timeout=20)
            response.raise_for_status()
            
            with open(temp_filepath, 'wb') as handler:
                handler.write(response.content)
            
            posts_data.append({
                "url": f"https://www.instagram.com/p/{post.shortcode}/",
                "image_path": f"{FINAL_FOLDER}/{filename}",
                "caption": post.caption if post.caption else "",
                "date": post.date_utc.strftime("%Y-%m-%d %H:%M:%S")
            })
            
        if len(posts_data) == 3:
            print("¡Descarga con éxito! Reemplazando las fotos antiguas...")
            
            if os.path.exists(FINAL_FOLDER):
                shutil.rmtree(FINAL_FOLDER)
            os.rename(TEMP_FOLDER, FINAL_FOLDER)
            
            with open("instagram.json", "w", encoding="utf-8") as f:
                json.dump(posts_data, f, ensure_ascii=False, indent=4)
                
            print("¡Feed de Instagram actualizado de forma segura!")
        else:
            raise Exception(f"Solo se pudieron descargar {len(posts_data)} publicaciones de 3 necesarias.")
        
    except Exception as e:
        print(f"\n⚠️ ERROR DETECTADO: {e}")
        print("🛡️ MANTENIENDO LAS FOTOS ANTIGUAS. El script abortará de forma segura.")
        if os.path.exists(TEMP_FOLDER):
            shutil.rmtree(TEMP_FOLDER)
        exit(1)

if __name__ == "__main__":
    fetch_instagram_posts()
