---
layout: plancks25
title: Miembros EC
hidden: true
permalink: /PLANCKS25/EC/
---

<div class="container">
  <div class="section">
    <!-- ENCABEZADO O INTRO, si quieres -->
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
      {% assign personsForRole = site.data.EC5.personas | where: "rol", currentRol %}

      <!-- Solo mostramos la sección si hay personas con este rol -->
      {% if personsForRole.size > 0 %}
        <h4>{{ currentRol }}</h4>

        <!-- Contenedor flex que envuelve las tarjetas -->
        <div class="row" 
             style="display: flex; 
                    flex-wrap: wrap; 
                    justify-content: center; 
                    margin: 0;">
          
          <!-- Recorremos todas las personas de este rol -->
          {% for persona in personsForRole %}
            <div style="width: 250px; margin: 10px;">
              <ul class="collection" style="width: 100%;">
                <li class="collection-item" style="padding: 15px; text-align: center;">
                  <div style="display: flex; 
                              flex-direction: column; 
                              align-items: center;">
                    
                    <!-- Imagen circular -->
                    {% if persona.img %}
                      <img 
                        src="{{ persona.img }}" 
                        alt="{{ persona.nombre }}"
                        style="
                          width: 80px; 
                          height: 80px; 
                          border-radius: 50%; 
                          object-fit: cover; 
                          margin-bottom: 10px;
                        "
                      >
                    {% endif %}
                    
                    <!-- Nombre y rol -->
                    <span style="font-weight: 600;">
                      {{ persona.nombre }}
                    </span>
                    <span>
                      {{ persona.rol }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>
