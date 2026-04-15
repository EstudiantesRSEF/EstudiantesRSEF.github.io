---
layout: default
title: "LC Madrid - UCM"
permalink: /DeleMadridUCM/
description: "Local Committee Madrid - Universidad Complutense"
---

<div class="container my-5">
  {% assign lc = site.data.LC | where: "id", "MadridUCM" | first %}

  <div class="row align-items-center mb-5">
    <!-- Logo -->
    <div class="col-md-6 text-center">
      <img src="{{ lc.img }}" alt="{{ lc.nombre }}" class="img-fluid rounded shadow" style="max-width: 80%;">
    </div>
    <!-- Info -->
    <div class="col-md-6">
      <h1 class="mb-3">{{ lc.nombre }}</h1>
      <p class="text-muted">Desde <strong>{{ lc.fundacion }}</strong></p>
      <h4 class="mt-4">Equipo</h4>
      <ul class="list-unstyled">
        <li><b>Presidencia:</b> {{ lc.presidente }}</li>
        <li><b>Vicepresidencia:</b> {{ lc.vicepresidente }}</li>
        <li><b>Secretaría:</b> {{ lc.secretario }}</li>
        <li><b>Tesorería:</b> {{ lc.tesorero }}</li>
        {% if lc.colaboradores %}
        <li><b>Colaboradores:</b>
          <ul>
            {% for col in lc.colaboradores %}
            <li>{{ col.nombre_col }}</li>
            {% endfor %}
          </ul>
        </li>
        {% endif %}
        {% if lc.ex %}
        <li><b>Expresidentes:</b>
          <ul>
            {% for ex in lc.ex %}
            <li>{{ ex.nombre_ex }}</li>
            {% endfor %}
          </ul>
        </li>
        {% endif %}
      </ul>
    </div>
  </div>

  <!-- Events Section
  <div class="row my-5">
    <div class="col-12">
      <h2 class="text-center mb-4">Eventos</h2>
      <div class="row g-4">
        {% for event in lc.eventos %}
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm">
            {% if event.img %}
            <img src="{{ event.img }}" class="card-img-top" alt="{{ event.nombre }}">
            {% endif %}
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ event.nombre }}</h5>
              <p class="card-text text-muted">{{ event.fecha }}</p>
              <p class="card-text">{{ event.descripcion }}</p>
              {% if event.url %}
              <a href="{{ event.url }}" class="btn btn-primary mt-auto">Más info</a>
              {% endif %}
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div> -->

</div>
