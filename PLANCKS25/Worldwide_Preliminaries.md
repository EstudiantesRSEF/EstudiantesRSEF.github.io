---
layout: plancks25
title: PLANCKS Barcelona 2025
hidden: True
permalink: /PLANCKS25/WorldwidePreliminaries/
---

<link rel="stylesheet" href="/css/bubbles.css">

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">

<!-- BANNER -->
<img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/PLANCKS25_Banner.png">

<h4>Barcelona 2025 Worldwide Preliminaries: Find the PLANCKS Preliminaries in your country!</h4>
      <p style="text-align: justify;">Since PLANCKS is a wide-spread international event, some countries hold preliminary events. Throughout these preliminaries, the best teams in each country are chosen as representation to PLANCKS international finals: Barcelona 2025.</p>
      <p style="text-align: justify;">Don’t miss out, check the PLANCKS Preliminaries venue in your country and come to Barcelona!</p>
      <p style="text-align: justify;">If your country is not listed below, then don’t wait and contact us on plancks25@rsef.es to arrange representing your country.</p>

<!-- SEDES -->

<div class="bubble-parent">
        {% for venue in site.data.PLANCKS25.info_venues %}
        <div class="bubble-container">
          <div class="info-bubble" >
            <img src="{{venue.logo}}" alt="{{ venue.title }} Logo" class="bubble-logo" />
            <h3 class="bubble-title">{{ venue.name }}</h3>
            <p class="bubble-date" style="color: #E0E0E0">Date: {{ venue.date }}</p>
            <p class="bubble-mail" style="color: #E0E0E0">Contact: <a href="mailto:{{venue.contact}}" style="color:rgb(72, 65, 153); text-decoration: underline;">{{ venue.contact}}</a></p>
            <p class="bubble-organizers" style="color: #E0E0E0">Organizers: {{venue.organizers}}</p>
            <div class="bubble-buttons">
              <a href="{{venue.iaps}}" class="btn-plancks25">{IAPS}</a>
              <a href="{{venue.web}}" class="btn-plancks25">Website</a>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>


<!-- SPONSORS -->
      {% include PLANCKS25_patrocinadores.html %}
	  
    </div>
  </div>
</div>
