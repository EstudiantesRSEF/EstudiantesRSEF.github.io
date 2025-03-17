---
layout: plancks25
title: Miembros EC
hidden: true
permalink: /PLANCKS25/EC/
---

<div class="container">
  <div class="section">
    <!-- INTRO, si quieres -->
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

    {% for rol in rolesOrder %}
      {% assign currentRol = rol | strip %}
      
      <h4>{{ currentRol }}</h4>

      <div class="row">
        {% for persona in site.data.EC5.personas %}
          {% if persona.rol == currentRol %}
            <!-- Tarjeta sencilla -->
            <div class="col s12 m4">
              <ul class="collection" style="width: 100%;">
                <li class="collection-item" style="padding: 15px;">
                  <!-- Usamos flex y un DIV para alinear la imagen y el texto -->
                  <div style="display: flex; align-items: center;">
                    <!-- Imagen circular con un tamaño fijo, recorte cover -->
                    <img 
                      src="{{ persona.img }}" 
                      alt="{{ persona.nombre }}"
                      style="
                        width: 70px; 
                        height: 70px; 
                        border-radius: 50%;
                        object-fit: cover;
                        margin-right: 15px;
                      "
                    >
                    <!-- Bloque para el nombre y rol -->
                    <div>
                      <span style="font-weight: 600;">{{ persona.nombre }}</span><br>
                      <span>{{ persona.rol }}</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    {% endfor %}
  </div>
</div>
