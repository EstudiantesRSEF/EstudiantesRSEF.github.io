---
layout: plancks25
title: Info - PLANCKS25
permalink: /PLANCKS25/info/
description: "Real time info for participants"
thumbnail: "/img/eventos/2025-PLANCKS/Logo.png"
---

<div class="no-pad-top" id="index-page">
  <div class="container">
<!-- BANNER -->
    <div class="section">
      <img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/PLANCKS25_Banner.png">
    </div>
<!-- GROUPS FOR CATALAN ACTIVITIES -->
    <div class="section">
      <h3>Find your group for Saturday's Catalan Activities!</h3>
      <p>Enter your 3-character code (e.g., <code>01a</code>, <code>O22</code>, etc.) to see which group you're in:</p>
      <input type="text" id="codigo" maxlength="3" placeholder="Tu código">
      <button onclick="buscarGrupo()">Buscar</button>
      <div id="resultado"></div>
    </div>
    <script src="/js/codigos_grupo.js"></script>
    <script src="/js/buscador.js"></script>
<!-- SPONSORS -->	  
    <div class="section">
      {% include patrocinadores.html sponsors=site.data.PLANCKS25.multiple.sponsors %}    
    </div>   
  </div>
</div>
