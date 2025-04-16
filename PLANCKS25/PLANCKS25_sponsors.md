---
layout: plancks25
title: Partners - PLANCKS25
permalink: /PLANCKS25/partners/
description: "Big thank you to all our partners!"
thumbnail: "/img/eventos/2025-PLANCKS/Logo.png"
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">
<!-- BANNER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/PLANCKS25_Banner.png">
<!-- FLIPCARDS -->
      <div class="sponsor-parent">
        {% for sponsor in site.data.PLANCKS25.sponsors_info %}
        <div class="sponsor-flip-wrapper" onclick="this.querySelector('.sponsor-card').classList.toggle('flipped')">
          <div class="sponsor-card">
            <!-- Front side -->
            <div class="sponsor-face sponsor-front">
              <img src="{{sponsor.logo}}" alt="{{sponsor.name}}">
            </div>
            <!-- Back side -->
            <div class="sponsor-face sponsor-back">
              <div class="back-scroll">
                <p>{{sponsor.info}}</p>
                <a class="button" href="{{sponsor.web}}" target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
<!-- SPONSORS -->	  
    </div>  
    <div class="section">
      {% include patrocinadores.html sponsors=site.data.PLANCKS25.multiple.sponsors %}    
    </div>   
  </div>
</div>
