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
      <!-- Venue & Program Section -->
<!-- Venue & Program Section -->
    <div class="row">
      <!-- Venue Column -->
      <div class="col s12 m6 l6 d-flex flex-column">
        <h2>Venue</h2>
        <p style="text-align: justify;">We're excited to announce that our event's venue and accommodations are set—check out all the details!</p>
        <div class="mt-auto">
          <div class="row d-flex justify-content-center">
            <a href="https://estudiantes.rsef.es/PLANCKS25/Venue/" id="boton-venue" class="btn-rounded plancks25-color">Venue & Accomodations</a>
          </div>
        </div>
      </div>        
      <!-- Program Column -->
      <div class="col s12 m6 l6 d-flex flex-column">
        <h2>Program</h2>
        <p style="text-align: justify;">The <strong>Provisional</strong> program for PLANCKS 25 is here! Check it out here!</p>
        <div class="mt-auto">
          <div class="row d-flex justify-content-center">
            <a href="https://estudiantes.rsef.es/PLANCKS25/Program/" id="boton-programa" class="btn-rounded plancks25-color">Program</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Speakers Section -->
    <div class="row">
      <div class="col s12 m8 offset-m2 l6 offset-l3 d-flex flex-column">
        <h2 class="center">Speakers</h2>
        <p style="text-align: justify;">Meet our distinguished speakers, including Nobel laureate Anne L'Huillier and leading experts in physics!</p>
        <div class="mt-auto">
          <div class="row d-flex justify-content-center">
            <a href="https://estudiantes.rsef.es/PLANCKS25/Speakers/" id="boton-speakers" class="btn-rounded plancks25-color">Meet the Speakers</a>
          </div>
        </div>
      </div>
    </div>
<!-- FEES -->
      <h2>Participation Fees</h2>
      <p style="text-align: justify;">The registration fee for both participants and observers is <strong>100€</strong>. This fee includes:</p>
      <ul style="text-align: justify; padding-left: 2rem; ">
        <li style="list-style-type: disc">Accommodation for the duration of the event, from evening 1st May to morning 5th May</li>
        <li style="list-style-type: disc">Transportation between accommodation and venue (but not from and to the airport)</li>
        <li style="list-style-type: disc">Access to all scientific activities</li>
        <li style="list-style-type: disc">Social events and excursions</li>
      </ul>      
<!-- FAQ -->
      <div class="section">
        <div class="row">
          <h4 id="preguntas">Frequently Asked Questions</h4>
          <ul class="collapsible" style="padding:0">
            <li>
              <div class="collapsible-header"><strong>When does PLANCKS start?</strong></div>
              <div class="collapsible-body">
                <ul class="collection" style="margin:0">
                  <li class="collection-item"><div style="text-align: left;">
                    <p style="padding: 0px; text-align: left;">As stated in our official communications, May 1 is an optional day for PLANCKS participants. The registration desk will be open in downtown Barcelona throughout the day, with cultural visits and activities planned for the afternoon. Accommodation in the official venue is available and included in the registration fee. Participants may also choose to arrive on the morning of May 2, as the Opening Ceremony will take place in the early afternoon of Friday 2. On the morning of May 2, the registration desk will remain open and attendees will have the opportunity to visit research facilities in the Barcelona area.</p>
                  </div></li>
                </ul>
              </div>
            </li>
            <li>
              <div class="collapsible-header"><strong>When does PLANCKS end?</strong></div>
              <div class="collapsible-body">
                <ul class="collection" style="margin:0">
                  <li class="collection-item"><div style="text-align: left;">
                    <p style="padding: 0px; text-align: left;">PLANCKS 2025 will conclude with the Closing ceremony and Prize Ceremony just before lunch on Monday, May 5, ending around 2:00 PM. Participants planning their departure should consider a travel time of approximately one hour to Barcelona Airport, making afternoon flights a suitable option.</p>
                  </div></li>
                </ul>
              </div>
            </li>
            <li>
              <div class="collapsible-header"><strong>Can I stay longer than the official dates?</strong></div>
              <div class="collapsible-body">
                <ul class="collection" style="margin:0">
                  <li class="collection-item"><div style="text-align: left;">
                    <p style="padding: 0px; text-align: left;">Accommodation before May 1 or after May 5 is not included in the registration and must be arranged by participants themselves. Staying at the official venue is not recommended, as it is outside Barcelona and far from public transportation. However, the Organizing Committee is happy to assist in finding a suitable accommodation in Barcelona for your extra days.</p>
                  </div></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
<!-- LEARN MORE section -->
      <div class="section">
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="row center">
              <a href="https://iaps.info/events/plancks/" target="_blank" id="boton-plancks" class="btn-rounded plancks25-color">Learn more about PLANCKS</a>
            </div>
          </div>
          <div class="col s12 m6 l6">
            <div class="row center">
              <a href="{{ site.url }}" target="_blank" id="boton-gdee" class="btn-rounded plancks25-color">Learn more about TC Spain</a>
            </div>
          </div>
        </div>
      </div>   	        
    </div>
    <div class="section">
        {% include patrocinadores.html sponsors=site.data.PLANCKS25.multiple.sponsors %}    
    </div>
  </div>
</div>
