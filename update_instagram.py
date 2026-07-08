import json
import os
import instaloader

def fetch_instagram_posts():
    # Inicializar Instaloader
    L = instaloader.Instaloader()
    
    # Reemplaza con tu nombre de usuario de Instagram (debe ser una cuenta pública)
    USER = "tu_usuario_de_instagram" 
    
    try:
        # Cargar el perfil
        profile = instaloader.Profile.from_username(L.context, USER)
        posts_data = []
        
        # Iterar sobre las publicaciones y quedarnos con las 3 más recientes
        for count, post in enumerate(profile.get_posts()):
            if count >= 3:
                break
                
            posts_data.append({
                "url": f"https://www.instagram.com/p/{post.shortcode}/",
                "image_url": post.url,
                "caption": post.caption if post.caption else "",
                "date": post.date_utc.strftime("%Y-%m-%d %H:%M:%S")
            })
            
        # Guardar los datos en un archivo JSON
        with open("instagram.json", "w", encoding="utf-8") as f:
            json.dump(posts_data, f, ensure_ascii=False, indent=4)
            
        print("¡JSON de Instagram actualizado correctamente!")
        
    except Exception as e:
        print(f"Error al obtener las publicaciones: {e}")

if __name__ == "__main__":
    fetch_instagram_posts()