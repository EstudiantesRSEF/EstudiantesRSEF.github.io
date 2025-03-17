---
layout: plancks25
title: Miembros EC
hidden: true
permalink: /PLANCKS25/EC/
---

<!-- Envuélvelo todo en .container y .section para mayor espacio -->
<div class="container">
  <div class="section">
    <!-- ENCABEZADO O INTRO -->
    <div class="row">
      <div class="col s12 m4">
        <img data-caption="Logo de Estudiantes RSEF." width="100%" src="{{ site.url }}/img/logos/gdee-rsef.png">
      </div>
      <div class="col s12 m6 offset-m1">
        <p>
          Esta es la composición actual del equipo, agrupado por su puesto.
        </p>
      </div>
    </div>
  </div>

  <div class="section">
    <hr>
    <!-- Orden exacto de roles que quieres mostrar -->
    {% assign rolesOrder = "
      President,
      Vicepresident,
      Local Logistics,
      Participants Coordination,
      Scientific Program,
      Public Relations,
      Social Media,
      IT,
      Academic,
      Finances
    " | split: "," %}

    <!-- Bucle que recorre cada rol en el orden definido -->
    {% for rol in rolesOrder %}
      {% assign currentRol = rol | strip %}
      
      <!-- Título para cada grupo de personas -->
      <h4>{{ currentRol }}</h4>

      <div class="row">
        {% for persona in site.data.EC5.personas %}
          {% if persona.rol == currentRol %}
            <!-- Tarjeta sencilla -->
            <div class="col s12 m4">
              <ul class="collection" style="width: 100%">
                <li class="collection-item avatar5">
                  {% if persona.img %}
                    <img src="{{ persona.img }}" alt="{{ persona.nombre }}" class="circle" />
                  {% endif %}
                  <p class="title" style="padding-left: 10px; padding-top: 15px;">
                    {{ persona.nombre }}
                  </p>
                  <p class="rol" style="padding-left: 10px; padding-bottom: 25px;">
                    {{ persona.rol }}
                  </p>
                </li>
              </ul>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    {% endfor %}
  </div>
</div>
