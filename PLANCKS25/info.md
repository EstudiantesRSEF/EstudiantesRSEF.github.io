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
      <h3>Find here your group for saturday's Catalan Activities!</h3>
      <p>Introduce your 3 character code (ex. <code>01a</code>, <code>O22</code>...):</p>
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
