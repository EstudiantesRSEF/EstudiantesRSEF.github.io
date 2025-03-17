---
layout: plancks25
title: Miembros del EC4
hidden: true
permalink: /PLANCKS25/EC/
---

<!-- Un bucle sobre site.data.EC4 o cualquier dato que uses -->
{% for item in site.data.EC5 %}
<div class="row">
  <div class="col s12 m4">
    <img data-caption="Logo de Estudiantes RSEF." width="100%" src="{{ site.url }}/img/logos/gdee-rsef.png">
  </div>
  <div class="col s12 m6 offset-m1">
    <p>La Junta de Gobierno es el órgano administrativo y ejecutivo del Grupo de Estudiantes de la RSEF, y está actualmente compuesta por {{ item.nmiembros }} miembros.</p>
  </div>
</div>

## Junta de Gobierno actual

Esta Junta de Gobierno fue elegida el {{ item.dataElecciones }}.
{% if item.dataInicio %}Sus miembros tomaron posesión de su cargo el {{ item.dataInicio }}.{% endif %}
{% if item.dataFin %}Permmanecieron en sus respectivos cargos hasta el {{ item.dataFin }}.{% endif %}
{% endfor %}

<!-- Aquí empiezan las tarjetas de personas sin modal -->
<div class="section" id="content-desktop">
  <div class="row center">
    {% assign sorted_persons = site.persons | sort: 'Pos_EC5' %}
    {% for person in sorted_persons %}
      {% if person.EC5 %}
        <ul class="collection" style="width: 300px">
          <li class="collection-item avatar5">
            <!-- Imagen circular -->
            <img src="{{ person.img }}" alt="Foto de {{ person.nombre }}" class="circle" style="margin-bottom: 10px;">
            <!-- Nombre y rol/puesto -->
            <p class="title" style="padding-left: 120px; padding-top: 15px;">
              {{ person.nombre }}
            </p>
            <p class="rol" style="padding-left: 120px; padding-bottom: 25px;">
              {{ person.EC5 }}
            </p>
          </li>
        </ul>
      {% endif %}
    {% endfor %}
  </div>
</div>

<!-- Versión para móvil (si mantienes doble contenido) -->
<div class="section" id="content-mobile">
  <div class="row center">
    {% assign sorted_persons = site.persons | sort: 'Pos_EC5' %}
    {% for person in sorted_persons %}
      {% if person.EC5 %}
        <ul class="collection" style="width: 90%">
          <li class="collection-item avatar5">
            <img src="{{ person.img }}" alt="Foto de {{ person.nombre }}" class="circle" style="margin-bottom: 10px;">
            <p class="title" style="padding-left: 120px; padding-top: 15px;">
              {{ person.nombre }}
            </p>
            <p class="rol" style="padding-left: 120px; padding-bottom: 25px;">
              {{ person.EC5 }}
            </p>
          </li>
        </ul>
      {% endif %}
    {% endfor %}
  </div>
</div>
