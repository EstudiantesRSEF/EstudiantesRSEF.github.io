---
layout: default
title: Preliminares PLANCKS 2025
permalink: /PreliminaresPLANCKS2025pruebasmdb/
---

<div class="no-pad-top" id="index-page">
  <div class="prelis25-container">
    <div class="prelis25-sidebar">
      <div class="sidebar">
        <ul>
          {% for item in site.data.Prelis.PostsList limit:3 %}
          <li>
            <a href="{{ item.url }}">
              <p>{{ item.text }}</p>
              {% if item.video %}
              <video width="100%" height="auto" autoplay muted loop>
                <source src="{{ item.image }}" type="video/mp4">
                Tu navegador no soporta videos.
              </video>
              {% else %}
              <img src="{{ item.image }}" alt="{{ item.text }}">
              {% endif %}
            </a>
          </li>
          {% endfor %}
        </ul>
      </div>
    </div>
    <div class="prelis25-content">
      <!-- BANNER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/PLANCKS25_Banner.png">
      <!-- RESULTADOS -->
      <hr>
      <h2 style="text-align: center;">
        <a href="{{ site.url}}/PreliminaresPLANCKS/2025/clasificacionprelis2025.pdf" target="_blank"><span><strong>CLASIFICACIÓN DE LAS PRELIMINARES DE PLANCKS 2025</strong></span></a>
      </h2>
      <hr>
      <!-- SOLUCIONES -->
      <h2 style="text-align: center;">
        <a href="https://drive.google.com/drive/folders/1W5TApAH-R18FIYzg79aIk_bP2T36iI4F" target="_blank"><span><strong>SOLUCIONES DE LOS PROBLEMAS</strong></span></a>
      </h2>
      <hr>
      <!-- INTRODUCCIÓN -->
      <p style="text-align: justify; line-height: 1.5;">¿Tienes ganas de pasar un rato divertido resolviendo problemas de física? ¡Ya tenemos aquí la octava edición de las <strong>Preliminares de PLANCKS</strong>! Y este año también ofrecemos <strong>1000€ en PREMIOS</strong> gracias al apoyo de la Fundación Ramón Areces. Así que reúne a un grupo de motivados como tú y sigue explorando la web para saber más. ¡Bienvenid@!</p>
      <!-- BOTONES -->
      <div class="section">
        <div class="row center">
          <a href="#info-modal" id="info-button" class="collection-item modal-trigger btn-plancks25 waves-effect waves-light"><i class="material-icons" style="padding-right: 8px;">info</i><strong>Información general</strong></a>
        </div>
        <div class="row center">
          <a href="#supervisores-modal" id="supervisores-button" class="btn-plancks25 waves-effect waves-light"><i class="material-icons" style="padding-right: 8px;">remove_red_eye</i><strong>Supervisoras/es</strong></a>
          <a href="#plancks-modal" id="conocer-button" class="btn-plancks25 waves-effect waves-light"><i class="material-icons" style="padding-right: 8px;">explore</i><strong>Conoce Plancks</strong></a>
          <a href="#premios-modal" id="premios-button" class="btn-plancks25 waves-effect waves-light"><i class="material-icons" style="padding-right: 8px;">star</i><strong>Premios</strong></a>
          <a href="#inscripcion-modal" id="inscripcion-button" class="btn-plancks25 waves-effect waves-light"><i class="material-icons" style="padding-right: 8px;">create</i><strong>Inscríbete</strong></a>
        </div>
      </div>
    </div>
  </div>
</div>