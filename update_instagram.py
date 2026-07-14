import json
import os
import shutil
import requests
import feedparser
import re

def fetch_instagram_posts():
    USER = "estudiantesrsef"
    FINAL_FOLDER = "instagram_posts"
    TEMP_FOLDER = "temp_instagram_posts"
    
    # 1. Preparar carpeta temporal limpia para el enfoque "Todo o Nada"
    if os.path.exists(TEMP_FOLDER):
        shutil.rmtree(TEMP_FOLDER)
    os.makedirs(TEMP_FOLDER)
    print(f"Iniciando obtención del feed RSS para @{USER}...")

    try:
        posts_data = []
        
        # Cabeceras estándar para simular un lector RSS o navegador normal
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        }

        # ESTRATEGIA RSS: Usar una pasarela pública de generación de RSS para Instagram.
        # Las instancias de RSSHub convierten feeds públicos de redes sociales a formato XML estándar.
        rss_url = f"https://rsshub.app/instagram/user/{USER}"
        
        print(f"Descargando datos desde: {rss_url}...")
        response = requests.get(rss_url, headers=headers, timeout=15)
        response.raise_for_status()
        
        # Procesamos el XML descargado
        feed = feedparser.parse(response.text)
        
        if not feed.entries:
            # Plan B de respaldo automático por si la instancia principal de RSSHub está saturada
            print("Instancia principal sin datos, intentando pasarela secundaria...")
            rss_url_backup = f"https://rss.app/feeds/u/instagram/{USER}"
            response = requests.get(rss_url_backup, headers=headers, timeout=15)
            response.raise_for_status()
            feed = feedparser.parse(response.text)

        print(f"Se han encontrado {len(feed.entries)} publicaciones en el feed.")

        # Recorremos las publicaciones hasta conseguir las 3 más recientes con imagen válida
        count = 0
        for entry in feed.entries:
            if count >= 3:
                break
                
            # Buscar la URL de la imagen en la descripción (HTML) o en los metadatos del feed
            img_url = None
            if hasattr(entry, 'media_content') and entry.media_content:
                img_url = entry.media_content[0]['url']
            elif hasattr(entry, 'links'):
                for link in entry.links:
                    if 'image' in link.get('type', ''):
                        img_url = link.get('href')
                        break
            
            # Si no está en los metadatos, la extraemos del contenido HTML del RSS usando expresiones regulares
            if not img_url and hasattr(entry, 'summary'):
                match = re.search(r'src="([^"]+)"', entry.summary)
                if match:
                    img_url = match.group(1)
                    
            if not img_url:
                continue

            # Limpiamos posibles entidades HTML de la URL
            img_url = img_url.replace('&amp;', '&')
            
            filename = f"post_{count}.jpg"
            temp_filepath = os.path.join(TEMP_FOLDER, filename)
            
            print(f"[{count+1}/3] Descargando imagen física de la publicación...")
            img_response = requests.get(img_url, headers=headers, timeout=15)
            img_response.raise_for_status()
            
            with open(temp_filepath, 'wb') as handler:
                handler.write(img_response.content)
            
            # Extraer texto de la publicación limpio (sin etiquetas HTML)
            raw_caption = getattr(entry, 'title', '') or getattr(entry, 'summary', '')
            clean_caption = re.sub(r'<[^>]+>', '', raw_caption).strip()
            
            posts_data.append({
                "url": getattr(entry, 'link', f"https://www.instagram.com/{USER}/"),
                "image_path": f"{FINAL_FOLDER}/{filename}",
                "caption": clean_caption[:100] + ("..." if len(clean_caption) > 100 else ""),
                "date": getattr(entry, 'published', 'Reciente')
            })
            count += 1
            
        # 2. VERIFICACIÓN DE ÉXITO ("Todo o Nada")
        if len(posts_data) > 0:
            print(f"¡Éxito! Se han procesado y descargado {len(posts_data)} imágenes de forma segura.")
            
            if os.path.exists(FINAL_FOLDER):
                shutil.rmtree(FINAL_FOLDER)
            os.rename(TEMP_FOLDER, FINAL_FOLDER)
            
            with open("instagram.json", "w", encoding="utf-8") as f:
                json.dump(posts_data, f, ensure_ascii=False, indent=4)
                
            print("¡Archivos e imágenes actualizados correctamente para tu web estática!")
        else:
            raise Exception("No se pudo extraer ninguna imagen válida del feed RSS.")
        
    except Exception as e:
        print(f"\n⚠️ ERROR DETECTADO: {e}")
        print("🛡️ MANTENIENDO LAS FOTOS ANTIGUAS. El script abortará sin alterar tu web.")
        if os.path.exists(TEMP_FOLDER):
            shutil.rmtree(TEMP_FOLDER)
        exit(1)

if __name__ == "__main__":
    fetch_instagram_posts()
