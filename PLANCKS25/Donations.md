---
layout: plancks25
title: Donations - PLANCKS25
permalink: /PLANCKS25/Funding/
description: "Support PLANCKS with a Donation!"
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
      <!-- DONATION -->

<div class="donation-box">
  <h3>Support PLANCKS with a Donation!</h3>
  <p>We greatly appreciate your support! You can donate any amount you wish, and if you'd like your name to be acknowledged, please send us the donation receipt via the contact form.</p>
  <p><b>IMPORTANT:</b> Please make sure to specify <b>PLANCKS25</b> in the donation concept to help us track your donation!</p>
  <p>Donating also comes with tax benefits. To learn more, you can check all the information under the form:</p>
  <div class="donation-button-container">
    <a href="https://rsef.playoffinformatica.com/preinscripcion/5/Donacion/" target="_blank" class="btn-rounded plancks25-color">
      Make a Donation
    </a>
  </div>
</div>
    <div class="donation-image">
  <img src="/img/eventos/2025-PLANCKS/PrelisDonaciones.png" alt="Donation Image" class="img-fluid">
</div>
      <!-- SPONSORS -->
      <div class="section">
        {% include patrocinadores.html sponsors=site.data.PLANCKS25.multiple.sponsors %}    
      </div> 
    </div>
  </div>
</div>
