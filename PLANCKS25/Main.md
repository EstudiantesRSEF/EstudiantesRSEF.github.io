---
layout: plancks25
title: PLANCKS Barcelona 2025
hidden: True
permalink: /PLANCKS25/
---

<!-- Enlazamos el archivo CSS del carrusel -->
<link rel="stylesheet" href="/css/carousel.css">

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">
<!-- BANNER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/PLANCKS25_Banner.png">
<!-- INTRODUCCIÓN -->
      <p style="text-align: justify;">Welcome to the official webpage of PLANCKS 2025 in Barcelona!</p>
      <p style="text-align: justify;">The Physics League Across Numerous Countries for Kick-ass Students (PLANCKS) is a exam-based physics competition for bachelor’s and master’s students. It is a four-day event filled to the brim with numerous excursions and social activities, alongside an opening symposium and the contest itself. Participants are encouraged to discover the research environment and culture of the hosting country. PLANCKS enables physics students from all over the world the opportunity to connect with each other. The aim of this event is to increase international collaboration, host social activities and stimulate the personal development of individual contestants. By bringing physics students from all over the world together, PLANCKS creates the perfect setting for participants to challenge each other, and exchange ideas and experiences. The first edition of PLANCKS took place in May 2014 in Utrecht and this will be the 12th edition.</p>
      <!-- <p style="text-align: justify;">Keep scrolling through the page to get more information about this year's edition!</p> -->
      <p style="text-align: justify;">Stay tuned to this website for the latest updates on the event!</p>
<!-- BOTONES -->
<!--
      <div class="section">
        <div class="row">
          <div class="col s6 m6 l3">
            <div class="row center">
              <a href="#objetivos" id="boton-objetivos" class="btn-plancks25 waves-effect waves-light">Objectives</a>
            </div>
          </div>
          <div class="col s6 m6 l3">
            <div class="row center">
              <a href="{{ site.url }}/ENEF2024/programa" id="boton-programa" class="btn-plancks25 waves-effect waves-light">Program</a>
            </div>
          </div>
	  <div class="col s6 m6 l3">
            <div class="row center">
              <a href="#inscribete" id="boton-inscribete" class="btn-plancks25 waves-effect waves-light">Plancks Preliminaries</a> 	      
            </div>
          </div>
	  <div class="col s6 m6 l3">
            <div class="row center">
              <a href="#preguntas" id="boton-preguntas" class="btn-plancks25 waves-effect waves-light">FAQs</a>
            </div>
          </div>
        </div>
      </div>
-->
<!--	<h4 id="objetivos">Objectives</h4>-->
<!-- FOTOS 
      <div class="section" id="content-desktop">
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="row center">
              <img class="materialboxed" width="100%" src="/img/eventos/2024-ENEF/Galeria/ENEF23GaleriaBig.png">
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="content-mobile">
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="row center">
              <img class="materialboxed" width="100%" src="/img/eventos/2024-ENEF/Galeria/ENEF23GaleriaSmall.png">
            </div>
          </div>
        </div>
      </div>
-->
<!-- CARRUSEL DE FOTOS -->
      <!-- <div class="carousel-container">
        <div class="carousel">
          <div class="carousel-item active"><img src="/img/eventos/2025-PLANCKS/FotosPrelis/prelis1.jpg" alt="Imagen 1"></div>
          <div class="carousel-item"><img src="/img/eventos/2025-PLANCKS/FotosPrelis/prelis2.jpg" alt="Imagen 2"></div>
          <div class="carousel-item"><img src="/img/eventos/2025-PLANCKS/FotosPrelis/prelis3.jpg" alt="Imagen 3"></div>
	  <div class="carousel-item"><img src="/img/eventos/2025-PLANCKS/FotosPrelis/prelis4.jpeg" alt="Imagen 4"></div>
        </div>
      </div> -->
<!-- CARRUSEL DE FOTOS -->
  <div class="carousel-container">
    <div class="carousel">
      {% for image in site.data.PLANCKS25.multiple.carousel_images %}
        <div class="carousel-item{% if forloop.first %} active{% endif %}">
          <img src="{{ image.src }}" alt="{{ image.alt }}">
        </div>
      {% endfor %}
    </div>
  </div>
<!-- PROGRAMA
      <div class="section">
        <h4 id="programa">Programa</h4>
	<p style="text-align: justify;">Durante el ENEF contaremos con las mejores oportunidades de networking, divulgación y desarrollo profesional. Tendremos ponencias científicas, talleres de desarrollo profesional, visitas a laboratorios, oportunidades de networking, feria de empresas, concursos de presentaciones... combinado con actividades lúdicas y culturales.</p>
	<div class="col s6 m6 l3">
          <div class="row center">
            <a href="{{ site.url }}/PLANCKS25/program" id="boton-programa" class="btn-plancks25">Get to know the provisional program!</a>
          </div>
        </div>
      </div> 
-->
<!-- LEARN MORE -->
      <div class="section">
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="row center"><a href="https://iaps.info/events/plancks/" target="_blank" id="boton-plancks" class="btn-plancks25 waves-effect waves-light">Learn more about PLANCKS</a></div>
          </div>
          <div class="col s12 m6 l6">
            <div class="row center"><a href="{{ site.url }}" target="_blank" id="boton-gdee" class="btn-plancks25 waves-effect waves-light">Learn more about TC Spain</a></div>
          </div>
        </div>
      </div>      	  
<!-- SPONSORS -->
      {% include PLANCKS25_patrocinadores.html %}	  
    </div>
  </div>
</div>

<!-- Carrousel functionality -->
<script src="/assets/js/carousel.js"></script>