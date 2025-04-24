---
layout: plancks25
title: Secret - PLANCKS25
permalink: /PLANCKS25/secret/
description: "Easter Egg by IT Committee"
thumbnail: "/img/eventos/2025-PLANCKS/Logo.png"
---

<div class="no-pad-top" id="index-page">
  <div class="plancks25-content">
      <!-- BANNER -->
      <div class="section">
        <img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/Emoji/banner_ee.png">	
      </div>
      <!-- EE -->
      <div class="section">
        <h4 id="EE">Uh-oh, looks like you've found the hidden spot...</h4>
        <p style="text-align: justify;"><strong>This is a secret! Keep it between us, okay?</strong></p>
        <p style="text-align: justify;">
          Now that you’ve discovered this little Easter Egg, we’d love to hear from you! What do you think about Mieres’ bid for ICPS 2025? Got any fun messages for other curious souls? Feel free to leave your thoughts below:
        </p>
        <!-- Message Box for User Input -->
        <form id="messageForm">
          <textarea name="message" rows="4" cols="50" placeholder="Share your secret thoughts here..." required></textarea>
          <br>
          <button type="submit">Send your secret!</button>
        </form>
        <div id="responseMessage"></div>
<script>
  document.getElementById("messageForm").onsubmit = function(event) {
    event.preventDefault();  // Evita que la página se recargue
    // Obtener el valor del mensaje
    var message = document.getElementById("message").value;
    // Enviar el mensaje a la API de Google Apps Script
    fetch('https://script.google.com/macros/s/AKfycbxNO9YRKuyGzEuKZJbrrpfTp8Rxygw_6nKJJpkpY8oG5EjtIl5fpUiJ2C4NsWuzG5OR8A/exec', {
      method: 'POST',
      body: new URLSearchParams({ 'message': message })
    })
    .then(response => response.text())
    .then(data => {
      // Mostrar un mensaje de éxito o error
      document.getElementById("responseMessage").textContent = data;
    })
    .catch(error => {
      document.getElementById("responseMessage").textContent = 'Error al guardar el mensaje.';
    });
  };
</script>
        <h5 style="margin-top: 2em;">Messages from the curious discoverers before you:</h5>
        <!-- Wall of Messages -->
        <div id="message-wall" style="border-top: 1px solid #ddd; padding-top: 20px;">
          <div class="message" style="margin-bottom: 15px;">
            <p><strong>Anonymous:</strong> "Mieres looks like a fantastic choice for ICPS 2025. Can’t wait to see the event in action!"</p>
          </div>
          <!-- Additional messages will go here after submission -->
        </div>
      </div>
  </div>
</div>
