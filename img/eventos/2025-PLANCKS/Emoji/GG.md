---
layout: plancks25
title: Secret Game - PLANCKS25
permalink: /PLANCKS25/secret-game/
description: "Easter Egg by IT Committee"
thumbnail: "/img/eventos/2025-PLANCKS/Logo.png"
---

<link rel="stylesheet" href="/css/bubbles.css">

<div class="no-pad-top" id="index-page">
  <div class="container">
    <!-- BANNER -->
    <div class="section">
      <img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/PLANCKS25_Banner.png">
    </div>
    <!-- GAME -->
    <div class="section">
      <div id="game-container">
        <button id="play-button">PLAY</button>
        <button id="highscores-button">HIGHSCORES</button>
      </div>
      <div id="game-display" style="display: none;">
          <!-- Aquí se cargará el juego cuando el botón PLAY sea presionado -->
          <py-script id="game-script" src="game.py"></py-script>
      </div>
      <script>
          // Espera a que el DOM esté completamente cargado
          document.addEventListener('DOMContentLoaded', function() {
              const playButton = document.getElementById('play-button');
              const gameDisplay = document.getElementById('game-display');
              const gameContainer = document.getElementById('game-container');
              // Acción cuando el botón PLAY es presionado
              playButton.addEventListener('click', function() {
                  gameContainer.style.display = 'none'; // Oculta los botones iniciales
                  gameDisplay.style.display = 'block'; // Muestra el área donde se cargará el juego
              });
              // Acción cuando el botón HIGHSCORES es presionado
              document.getElementById('highscores-button').addEventListener('click', function() {
                  alert('Mostrando los Highscores... (aquí iría la lógica para mostrar los scores)');
              });
          });
      </script>
    </div>
  </div>
</div>
