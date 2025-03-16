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
      <p style="text-align: justify;">The <strong>Physics League Across Numerous Countries for Kick-ass Students (PLANCKS)</strong> is an international physics competition for bachelor's and master's students. Taking place over <strong>four exciting days</strong>, the event combines a challenging physics contest with a program full of social and scientific activities. Students from around the globe come together to compete, connect, and share their passion for physics while exploring the host country's research environment and culture.</p>
      <p style="text-align: justify;">Since its first edition in Utrecht 2014, PLANCKS has become a cornerstone event for fostering <strong>international collaboration</strong> and creating lasting connections between physics students worldwide. PLANCKS Barcelona 2025 will mark the 12th edition of this competition.</p>
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
      <div class="row d-flex justify-content-center">
        <a href="https://estudiantes.rsef.es/PLANCKS25/venue/" id="boton-venue" class="btn-square plancks25-color" style="width: auto">Venue & Accomodations</a>
      </div> 
<!-- FEES -->
      <h2>Participation Fees</h2>
      <p style="text-align: justify;">The registration fee for both participants and observers is <strong>100€</strong>. This fee includes:</p>
      <ul style="text-align: justify; padding-left: 2rem; ">
        <li style="list-style-type: disc">Accommodation for the duration of the event</li>
        <li style="list-style-type: disc">Transportation between accommodation and venue</li>
        <li style="list-style-type: disc">Access to all scientific activities</li>
        <li style="list-style-type: disc">Social events and excursions</li>
      </ul>      
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
      {% include patrocinadores.html sponsors=site.data.PLANCKS25.sponsors %}    
    </div>
  </div>
</div>
