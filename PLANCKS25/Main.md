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
      <p style="text-align: justify; margin-top: 1em"> Welcome to the official webpage of <strong>PLANCKS 2025 in Barcelona</strong>! </p>
      <p style="text-align: justify;">   The <strong>Physics League Across Numerous Countries for Kick-ass Students (PLANCKS)</strong> is an exam-based physics competition for bachelor’s and master’s students. It is a <strong>four-day event</strong> filled to the brim with numerous excursions and social activities, alongside an opening symposium and the contest itself. Participants are encouraged to discover the research environment and culture of the hosting country. PLANCKS enables physics students from all over the world the opportunity to <strong>connect</strong> with each other. The aim of this event is to increase <strong>international collaboration</strong>, host social activities and stimulate the personal development of individual contestants. By bringing physics students from all over the world together, PLANCKS creates the perfect setting for participants to challenge each other, and exchange ideas and experiences. The first edition of PLANCKS took place in May 2014 in Utrecht and this will be the 12th edition. </p>
      <p style="text-align: justify;">
        <strong>Stay tuned</strong> to this website for the latest updates on the event!
      </p>
<!-- CARRUSEL DE FOTOS -->
      <div class="slider-auto">
        <div class="slide-track">
          {% for image in site.data.PLANCKS25.multiple.carousel_images %}
            <div class="slide">
              <img src="{{ image.src }}" alt="{{ image.alt }}">
            </div>
          {% endfor %}
          {% for image in site.data.PLANCKS25.multiple.carousel_images %}
            <div class="slide">
              <img src="{{ image.src }}" alt="{{ image.alt }}">
            </div>
          {% endfor %}
        </div>
      </div>
 <!-- Venue -->
      <h2> Venue </h2>
      <p style="text-align: justify;">We’re excited to announce that our event’s venue and accommodations are set—check out all the details! </p>
      <div class="row center">
        <a href="https://estudiantes.rsef.es/PLANCKS25/venue/" id="boton-venue" class="btn-square">Venue & Accomodations</a>
      </div> 
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
      {% include patrocinadores.html sponsors=site.data.PLANCKS25.multiple.sponsors %}      
    </div>
  </div>
</div>