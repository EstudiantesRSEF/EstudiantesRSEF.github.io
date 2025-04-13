---
layout: plancks25
title: Venues - PLANCKS25
permalink: /PLANCKS25/Venue/
description: "Find out where is PLANCKS25 taking place"
thumbnail: "/img/eventos/2025-PLANCKS/Logo.png"
---

<div class="no-pad-top" id="index-page">
  <div class="plancks25-container">
    <div class="plancks25-sidebar">
      <h3 class="sidebar-title">News!</h3>
      <ul>
        {% for item in site.data.PLANCKS25.multiple.news %}
        <li>
          <a href="{{ item.url }}">
            <p class="news-outlet">{{ item.outlet }}</p>
            <p class="news-title">{{ item.text }}</p>
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
    <div class="plancks25-content">
      <div class="section">
  <!-- BANNER -->
        <img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/PLANCKS25_Banner.png">	
      </div>
      <!-- PUBLICACIONES MÓVILES -->
      <div class="plancks25-publicaciones-movil">
        <h3 class="sidebar-title">News!</h3>
        <div class="publicaciones-row">
          {% for item in site.data.PLANCKS25.multiple.news %}
            <div class="publicacion">
              <a href="{{ item.url }}">
                <div class="news-card">
                  <p class="news-outlet">{{ item.outlet }}</p>
                  <p class="news-title">{{ item.text }}</p>
                  {% if item.video %}
                    <video width="100%" height="auto" autoplay muted loop>
                      <source src="{{ item.image }}" type="video/mp4">
                      Tu navegador no soporta videos.
                    </video>
                  {% else %}
                    <img src="{{ item.image }}" alt="{{ item.text }}">
                  {% endif %}
                </div>
              </a>
            </div>
          {% endfor %}
        </div>
      </div>
      <!-- VENUE -->
      <div class="section">
        <h4 id="venue">Venue: Faculty of Physics at UAB</h4>
        <p style="text-align: justify;">
          The competition will take place at the <strong>Faculty of Physics of the Autonomous University of Barcelona (UAB)</strong>, 
          located on a bustling and modern campus. This venue offers contemporary lecture halls, cutting-edge laboratories, 
          and dynamic learning environments that perfectly align with the spirit of an international physics competition.
        </p>
        <p style="text-align: justify;">
          Renowned for its high academic standards and innovative research, the Faculty of Physics is a hub of scientific exploration, 
          making it an ideal location for participants to immerse themselves in <strong>learning, collaboration, and camaraderie</strong>. 
          With convenient connections to Barcelona and surrounding areas, getting to the venue is straightforward and hassle-free.
        </p>
        <h5 style="margin-top: 1em;">Reasons you'll enjoy this venue:</h5>
        <ul>
          <li>🔬 <strong>Academic excellence:</strong> A prestigious institution recognized for pioneering research and a commitment to advancing physics education.</li>
          <li>🏢 <strong>Modern facilities:</strong> State-of-the-art lecture halls and labs designed for interactive presentations, experiments, and discussions.</li>
          <li>🤝 <strong>Collaborative atmosphere:</strong> Welcoming spaces that encourage networking and exchanging ideas with fellow physics enthusiasts from around the globe.</li>
          <li>🚆 <strong>Easy accessibility:</strong> Well-connected by public transport, allowing for a smooth commute to and from Barcelona.</li>
        </ul>
      </div>
      <!-- CARRUSEL DE FOTOS -->
      <div class="slider-auto">
        <div class="slide-track">
          {% for image in site.data.PLANCKS25/venue_multiple.carousel_images %}
            <div class="slide">
              <img src="{{ image.src }}" alt="{{ image.alt }}">
            </div>
          {% endfor %}
          {% for image in site.data.PLANCKS25/venue_multiple.carousel_images %}
            <div class="slide">
              <img src="{{ image.src }}" alt="{{ image.alt }}">
            </div>
          {% endfor %}
        </div>
      </div>
      <div class="section">
        <h3 id="how-to-get-here">How to Get Here</h3>
        <p style="text-align: justify;">
          The <strong>Faculty of Physics at UAB</strong> is conveniently located within the UAB campus. 
          Whether you are coming by train, bus, or car, you’ll find easy routes connecting directly 
          from Barcelona and nearby towns. Check the links below for detailed directions:
        </p>
        <div class="maps-buttons" style="text-align: center; margin-top: 1em;">
          <!-- Botón de Google Maps -->
          <a href="https://maps.app.goo.gl/9q7dpsmd4j52ew8y6" 
            target="_blank" 
            rel="noopener noreferrer" 
            style="display: inline-block; margin: 10px;">
            <img src="/img/eventos/2025-PLANCKS/googlemaps.png" 
                alt="Google Maps" 
                style="width: 40px; height: auto; vertical-align: middle;">
            <span style="display: inline-block; margin-left: 5px; vertical-align: middle;">
              <strong>Open in Google Maps</strong>
            </span>
          </a>
          <!-- Botón de Apple Maps -->
          <a href="https://maps.apple.com/place?q=Biblioteca%20de%20Ci%C3%A8ncia%20i%20Tecnologia&ll=41.5000373%2C2.107549&auid=17537308165470826685&lsp=9902&address=08193%20Cerdanyola%20del%20Vall%C3%A8s%2C%20Barcelona%2C%20Espa%C3%B1a" 
            target="_blank" 
            rel="noopener noreferrer" 
            style="display: inline-block; margin: 10px;">
            <img src="/img/eventos/2025-PLANCKS/applemaps.png" 
                alt="Apple Maps" 
                style="width: 40px; height: auto; vertical-align: middle;">
            <span style="display: inline-block; margin-left: 5px; vertical-align: middle;">
              <strong>Open in Apple Maps</strong>
            </span>
          </a>
        </div>
      </div>
      <!-- ACCOMODATION -->
      <div class="section">
        <h4 id="accommodation">Accommodation: La Conreria de Tiana</h4>
        <p style="text-align: justify;">
          <strong>La Conreria de Tiana</strong> is a <strong>meticulously restored old wine estate</strong> that combines 
          <strong>historical charm</strong> with <strong>modern services</strong> to ensure a comfortable and relaxing stay. Located 
          just a few kilometers from Barcelona, it offers a <strong>natural setting</strong> perfect for unwinding after each 
          day of competition, while still providing <strong>convenient access</strong> to the city’s sports venues.
        </p>
        <p style="text-align: justify;">
          The <strong>spacious common areas</strong> encourage participants to share experiences and forge new friendships. 
          In addition, its <strong>gastronomic offering</strong>, based on local products, ensures a healthy and delicious 
          diet to stay energized throughout the competition.
        </p>
        <h5 style="margin-top: 1em;">Why will you love it?</h5>
        <ul>
          <li>📍 <strong>Privileged location:</strong> Only a short distance from Barcelona, yet surrounded by a natural setting that helps you relax.</li>
          <li>🏠 <strong>Comfort and authenticity:</strong> Cozy rooms in a historic estate that will make you feel in a truly unique place.</li>
          <li>🤝 <strong>Connection and networking:</strong> Common areas designed to exchange ideas, stories, and experiences with fellow competitors.</li>
          <li>🍽️ <strong>Local flavor:</strong> A fresh, proximity-based cuisine to help you tackle each day with plenty of energy.</li>
        </ul>
      </div>
      <!-- CARRUSEL DE FOTOS -->
      <div class="slider-auto">
        <div class="slide-track">
          {% for image in site.data.PLANCKS25/venmultiple.carousel_images %}
            <div class="slide">
              <img src="{{ image.src }}" alt="{{ image.alt }}">
            </div>
          {% endfor %}
          {% for image in site.data.PLANCKS25/venmultiple.carousel_images %}
            <div class="slide">
              <img src="{{ image.src }}" alt="{{ image.alt }}">
            </div>
          {% endfor %}
        </div>
      </div>
      <div class="section">
        <h4 id="how-to-get-here">How to Get Here</h4>
        <p style="text-align: justify;">
        <strong>La Conreria de Tiana</strong> is located in a peaceful natural setting just a short distance from Barcelona. 
          You can easily arrive by car, public transportation, or a combination of both. The estate’s unique location 
          allows you to enjoy the tranquility of the countryside while remaining connected to the city’s main roads 
          and transport networks. Check the links below for detailed directions:
        </p>
        <div class="maps-buttons" style="text-align: center; margin-top: 1em;">
          <!-- Botón de Google Maps -->
          <a href="https://maps.app.goo.gl/sFXVURBWLTPbjY9Z6" 
            target="_blank" 
            rel="noopener noreferrer" 
            style="display: inline-block; margin: 10px;">
            <img src="/img/eventos/2025-PLANCKS/googlemaps.png" 
                alt="Google Maps" 
                style="width: 40px; height: auto; vertical-align: middle;">
            <span style="display: inline-block; margin-left: 5px; vertical-align: middle;">
              <strong>Open in Google Maps</strong>
            </span>
          </a>
          <!-- Botón de Apple Maps -->
          <a href="https://maps.apple.com/place?q=La%20Conreria&ll=41.4739261%2C2.2681031&auid=12624925186159593361&lsp=9902&address=Carrer%20Josep%20Rossello%2C%206%2C%2008391%20Tiana%2C%20Barcelona%2C%20Espa%C3%B1a" 
            target="_blank" 
            rel="noopener noreferrer" 
            style="display: inline-block; margin: 10px;">
            <img src="/img/eventos/2025-PLANCKS/applemaps.png" 
                alt="Apple Maps" 
                style="width: 40px; height: auto; vertical-align: middle;">
            <span style="display: inline-block; margin-left: 5px; vertical-align: middle;">
              <strong>Open in Apple Maps</strong>
            </span>
          </a>
        </div>
      </div>
      <!-- SPONSORS -->
      <div class="section">
        {% include patrocinadores.html sponsors=site.data.PLANCKS25.multiple.sponsors %}    
      </div> 
    </div>
  </div>
</div>