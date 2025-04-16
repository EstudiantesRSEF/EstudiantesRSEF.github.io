---
layout: page
title: Nuestros Eventos
permalink: /eventos/
---

¡Bienvenid@ a nuestra página de eventos! Aquí te presentamos algunos de los mejores eventos que existen para estudiantes de física a nivel nacional e internacional.

## Próximamente

{% assign loopindex = 0 %}
{% for event in site.events reversed %}
{% if event.date >= site.time and event.categories contains "eventos-internacionales" %}
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
{% if rowfinder == 0%}
</div>
{% endif %}
{% if loopindex == 0 %}
<ul class="collection">
    <li class="collection-item"> No hay eventos programados. Stay tuned! </li>
</ul>
{% endif %}

## Grandes eventos pasados

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
