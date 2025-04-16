---
layout: plancks25
title: Sponsors - PLANCKS25
permalink: /PLANCKS25/sponsors/
description: "Big thank you to all our sponsors!"
thumbnail: "/img/eventos/2025-PLANCKS/Logo.png"
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">
<!-- BANNER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/PLANCKS25_Banner.png">
<!-- FLIPCARDS -->
      <div class="sponsor-flip-wrapper" onclick="this.querySelector('.sponsor-card').classList.toggle('flipped')">
        <div class="sponsor-card">
          <!-- Front side -->
          <div class="sponsor-face sponsor-front">
            <img src="/img/eventos/2025-PLANCKS/sponsors/IUPAP.png" alt="IUPAP">
          </div>
          <!-- Back side -->
          <div class="sponsor-face sponsor-back">
            <p>IUPAP is the only global organization covering all areas of physics. Its mission is to assist in the worldwide development of physics, to foster cooperation in physics and to help in the applications of physics towards solving problems of concern to humanity.</p>
            <a class="button" href="https://iupap.org/" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        </div>
      </div>
<!-- SPONSORS -->	  
    </div>  
    <div class="section">
      {% include patrocinadores.html sponsors=site.data.PLANCKS25.multiple.sponsors %}    
    </div>   
  </div>
</div>
