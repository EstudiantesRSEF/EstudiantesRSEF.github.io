import json
import os
import shutil
import requests
import re
from bs4 import BeautifulSoup

def fetch_instagram_posts():
    USER = "estudiantesrsef"
    FINAL_FOLDER = "instagram_posts"
    TEMP_FOLDER = "temp_instagram_posts"
    
    # 1. Preparar carpeta temporal limpia
    if os.path.exists(TEMP_FOLDER):
        shutil.rmtree(TEMP_FOLDER)
    os.makedirs(TEMP_FOLDER)
    print(f"Iniciando búsqueda de imágenes para @{USER} sin bloqueos...")

    try:
        posts_data = []
        
        # Usamos una cabecera de navegador real ultracompleta para evitar bloqueos CDN
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        }

        # ESTRATEGIA: Consultar a través de un portal espejo público (Picnob / Picuki / Imginn estilo)
        # Usamos una pasarela rápida y limpia para extraer el feed sin chocar con el muro 403 de Meta
        url_espejo = f"https://www.picuki.com/profile/{USER}"
        print(f"Conectando al portal espejo de lectura rápida...")
        
        response = requests.get(url_espejo, headers=headers, timeout=15)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Buscamos los elementos de las publicaciones en el DOM
        items = soup.find_all('div', class_='box-photo', limit=3)
        
        if not items:
            # Plan de respaldo si cambia la clase: buscar por estructura de enlaces
            items = soup.select('.profile-posts .post-image')[:3]

        print(f"Se han localizado {len(items)} publicaciones recientes.")

        for count, item in enumerate(items):
            filename = f"post_{count}.jpg"
            temp_filepath = os.path.join(TEMP_FOLDER, filename)
            
            # Extraer URL de la imagen (suele estar en src o data-src)
            img_tag = item.find('img') if item.name != 'img' else item
            if not img_tag:
                continue
                
            img_url = img_tag.get('src') or img_tag.get('data-src')
            if not img_url:
                continue

            # Extraer enlace al post original y texto
            link_tag = item.find_parent('a') or item.find('a')
            post_link = link_tag.get('href') if link_tag else f"https://instagram.com/{USER}"
            caption = img_tag.get('alt', '')
            
            # Limpiar URL de la imagen si viene mal formateada
            if img_url.startswith('//'):
                img_url = "https:" + img_url

            print(f"[{count+1}/3] Descargando imagen...")
            img_data = requests.get(img_url, headers=headers, timeout=15).content
            
            with open(temp_filepath, 'wb') as handler:
                handler.write(img_data)
            
            posts_data.append({
                "url": post_link if "instagram.com" in post_link else f"https://www.instagram.com/{USER}/",
                "image_path": f"{FINAL_FOLDER}/{filename}",
                "caption": caption[:100] + ("..." if len(caption) > 100 else ""),
                "date": "Reciente"
            })
            
        # VERIFICACIÓN DE ÉXITO
        if len(posts_data) > 0:
            print(f"¡Éxito! Se han procesado {len(posts_data)} imágenes de forma segura.")
            
            if os.path.exists(FINAL_FOLDER):
                shutil.rmtree(FINAL_FOLDER)
            os.rename(TEMP_FOLDER, FINAL_FOLDER)
            
            with open("instagram.json", "w", encoding="utf-8") as f:
                json.dump(posts_data, f, ensure_ascii=False, indent=4)
                
            print("¡Archivos actualizados correctamente en el repositorio!")
        else:
            raise Exception("No se pudo extraer ninguna imagen del portal de lectura.")
        
    except Exception as e:
        print(f"\n⚠️ ERROR DETECTADO: {e}")
        print("🛡️ MANTENIENDO LAS FOTOS ANTIGUAS. El script abortará de forma segura.")
        if os.path.exists(TEMP_FOLDER):
            shutil.rmtree(TEMP_FOLDER)
        exit(1)

if __name__ == "__main__":
    fetch_instagram_posts()
