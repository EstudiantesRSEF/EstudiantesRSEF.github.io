---
layout: page
title: Preliminares PLANCKS
permalink: /PreliminaresPLANCKS/
---


<div class="section">
<!-- INTRODUCCIÓN -->
    <p style="text-align: justify;">
    ¿Te gustan los retos y te apasiona la física? ¿Quieres aspirar a representar a nuestro país en un concurso internacional con estudiantes de física de todo el mundo?
    El Grupo de Estudiantes de la RSEF lleva ya ocho años organizando las <strong>Preliminares de PLANCKS</strong> en España. Para participar sólo hace falta reunir un grupo de motivados como tú para pasar una tarde resolviendo problemas de física.
    Si ves que falta poco para la próxima edición de las Preliminares, entra a ver qué se cuece. Mientras, puedes explorar las últimas ediciones del concurso.
    Y si quieres conocer más sobre PLANCKS, consulta <a href="https://iaps.info/events/plancks/" class = "prelis25" target="_blank">esta página</a> de la International Association of Physics Students (IAPS). ¡Bienvenid@!</p>
    <div class="row center">
      <a href="{{ site.url }}/PreliminaresPLANCKS2026/" id="prelis-button" class="btn-plancks26 waves-effect waves-light ">Accede a la información de esta edición de las Prelis!</a>
    </div>    
    <!-- <h5 style="text-align: center;"><p style="text-align:center">La próxima edición de las preliminares de Plancks será en marzo de 2024.</p></h5> -->
    <!-- <h4 style="text-align: center;"><p style="text-align:center">Más información en enero de 2024.</p></h4> -->
<!-- EDICIONES ANTERIORES -->
  <div class="section" id="ediciones-anteriores">
    <h3 id="EdicionesAnteriores">Ediciones Anteriores</h3>
    <p style="text-align: justify;">En esta sección encontrarás información sobre ediciones anteriores de las Preliminares de PLANCKS como clasificaciones, exámenes resueltos o los integrantes de los Comités Organizador y Académico.</p>
  {% assign loopindex = 0 %}
  {% for event in site.events reversed %}
  {% if event.title contains "Preliminares de PLANCKS"%}
  {% if event.title != "Preliminares de PLANCKS 2026"%}
  {% assign rowfinder = loopindex | modulo:2 %}
  {% if rowfinder == 0 %}
    <div class="row">
  {% endif %}
    <div class="col s12 m6">
      <div class="card horizontal">
        <div class="card-image">
          <img style="height: 230px; object-fit: cover;" src="{{ event.cover }}">
        </div>
        <div class="card-content">
          <span class="card-title grey-text text-darken-4">{{ event.title }}</span>
          <p><small><b>{{ event.place }}</b> {{ event.startingdate | date: '%d %b %Y' }} {% if event.endingdate != nil %} - {{ event.endingdate | date: '%d %b %Y' }}                    {% endif %} </small></p>
        </div>
        <div class="card-action">
          <a href="{{ event.ranking }}" target="_blank">Clasificación</a>
          <a href="{{ event.exam }}" target="_blank">Soluciones</a>
          <a href="{{ event.url }}">Post web</a>
          <a href="{{ event.comm }}">Comités Organizador y Académico</a>
        </div>
      </div>
    </div>
  {% if rowfinder == 1 %}
    </div>
  {% endif %}
  {% assign loopindex = loopindex | plus: 1 %}
  <!--{% endif %}-->
  
  {% endif %}
  {% endfor %}
  {% if loopindex == 1 %}
    </div>
  {% endif %}

