---
layout: page
title: Evita que nuestros emails se archiven como SPAM
permalink: /spam/
gallery1: /img/NoMoreSpamGuideGmail/
gallery2: /img/NoMoreSpamGuideOutlook/
redirect_from:
---

A continuación te ofrecemos una breve guía para que los emails que recibas del Grupo de Estudiantes no se archiven como Spam:

1º. - Descarga el archivo <a href="https://drive.google.com/file/d/1AkwQuH_WxJS8nO2eznOvjT4VfMEjEnhm/view?usp=sharing">'Grupo de Estudiantes RSEF - Tarjeta de contacto'</a>

2º. - Registra este archivo como nuevo contacto en la cuenta de correo en la que recibas los mensajes del grupo. Para ello:

## Si usas Gmail

<p>- Abre los contactos.</p>
  
<p>- Importa el .vcf descargado</p>
  
<strong>Guía gráfica:</strong>
   
   <div class="carousel">
      {% for image in site.static_files %}{% if image.path contains page.gallery1 %}
      <a class="carousel-item" href="#{{ site.baseurl }}{{ image.path }}!"><img src="{{ site.baseurl }}{{ image.path }}"></a>
      {% endif %}{% endfor %}
    </div>

## Si usas Outlook (msn, hotmail, etc)

<p>- Abre los contactos (abajo a la izquierda)</p>
  
<p>- Importa el.vcf descargado (arriba a la derecha)</p>
  
<strong>Guía gráfica:</strong>
  
<div class="carousel">
   {% for image in site.static_files %}{% if image.path contains page.gallery2 %}
   <a class="carousel-item" href="#{{ site.baseurl }}{{ image.path }}!"><img src="{{ site.baseurl }}{{ image.path }}"></a>
   {% endif %}{% endfor %}
</div>
  


