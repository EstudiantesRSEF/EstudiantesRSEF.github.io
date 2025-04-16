---
layout: default
title: Física, ¿y ahora qué?
permalink: /FisicaYAhoraQue/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">

<!-- HEADER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2022-YAhoraQue/baner.png">

<!-- INTRODUCCIÓN -->
      <p style="text-align: justify;">Empezamos este nuevo curso con el ciclo de charlas <strong>"Física... ¿y ahora qué?"</strong>
        En estas charlas en colaboración con el <a href="https://www.cofis.es" id="cofis" target="_blank">Colegio Oficial de Físicos</a> contaremos con diversos invitados que nos contarán más sobre la diversidad de salidas profesionales de la Física, desde la empresa hasta la investigación científica. </p>
    
<!-- CHARLAS -->
    <div class="section" id="charlas">
      <h3>Todas las charlas</h3>
      <p style="text-align: justify;">En esta sección encontrarás toda la información actualizada sobre las charlas pasadas y futuras.</p>
    </div>

    {% assign loopindex = 0 %}
    {% for event in site.events reversed %}
    {% if event.yahoraque contains "Yes" %}
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
          <p><small><b>{{ event.place }}</b> {{ event.startingdate | date: '%d %b %Y' }} {% if event.endingdate != nil %} - {{ event.endingdate | date: '%d %b %Y' }} {% endif %}</small></p>
              </div>
          <div class="card-action">
            <a href="{{ event.site }}">Sitio</a>
            <a href="{{ event.url }}">Info</a>
            {% if event.video contains "www" %}
              <a href="{{ event.video }}" target="_blank">Grabación</a>
            {% endif %}
            {% if event.slides contains "drive" %}
              <a href="{{ event.slides }}" target="_blank">Diapositivas</a>
            {% endif %}
          </div>
        </div>
      </div>
    {% if rowfinder == 1 %}
    </div>
    {% endif %}
    {% assign loopindex = loopindex | plus: 1 %}
    {% endif %}
    {% endfor %}
    {% if rowfinder == 0 %}
    </div>
    {% endif %}
    {% if loopindex == 0 %}
    <ul class="collection">
        <li class="collection-item"> No hay eventos programados. Stay tuned! </li>
    </ul>
    {% endif %}
<!--
    <div class="section" id="anteriores-charlas">
      <h3>Anteriores charlas</h3>
      <p style="text-align: justify;">En esta sección guardamos todo lo relativo a las charlas que ya se han celebrado. Consulta los grandes ponentes que hemos tenido hasta la fecha.</p>
    </div>

    {% assign loopindex = 0 %}
    {% for event in site.events reversed %}
    {% if event.date < site.time and event.categories contains "eventos-internacionales" %}
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
          <p><small><b>{{ event.place }}</b> {{ event.startingdate | date: '%d %b %Y' }} {% if event.endingdate != nil %} - {{ event.endingdate | date: '%d %b %Y' }} {% endif %}</small></p>
              </div>
          <div class="card-action">
            <a href="{{ event.site }}">Sitio</a>
            <a href="{{ event.url }}">Info</a>
          </div>
        </div>
      </div>
    {% if rowfinder == 1 %}
    </div>
    {% endif %}
    {% assign loopindex = loopindex | plus: 1 %}
    {% endif %}
    {% endfor %}
    {% if rowfinder == 0 %}
    </div>
    {% endif %}
-->      
  </div>
</div>
