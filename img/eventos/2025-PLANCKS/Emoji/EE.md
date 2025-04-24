---
layout: plancks25
title: Secret - PLANCKS25
permalink: /PLANCKS25/secret/
description: "Easter Egg by IT Committee"
thumbnail: "/img/eventos/2025-PLANCKS/Logo.png"
---

<div class="no-pad-top" id="index-page">
  <div class="container">
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
        <form id="messageForm" method="POST" action="https://script.google.com/macros/s/AKfycbxNO9YRKuyGzEuKZJbrrpfTp8Rxygw_6nKJJpkpY8oG5EjtIl5fpUiJ2C4NsWuzG5OR8A/exec">
          <textarea name="mensaje" rows="4" cols="50" placeholder="Write your message here"></textarea><br><br>
          <!-- Botón de Submit -->
          <button id="submitButton" type="button" onclick="submitMessage()">Submit</button>
        </form> 
        <script>
          function submitMessage() {
            var form = document.getElementById("messageForm");
            var message = form.elements["mensaje"].value;
            var submitButton = document.getElementById("submitButton"); // Define the button here
            if (message.trim() !== "") {
              // Realizar la petición POST
              fetch(form.action, {
                method: "POST",
                body: new URLSearchParams({
                  mensaje: message
                })
              })
              .then(response => response.json())
              .then(data => {
                console.log("Message sent successfully:", data);
                alert("¡Message sent!");
                // Reset the form after submission
                form.reset(); // Reset all form fields
                // Optionally, clear the message field manually if needed
                // form.elements["mensaje"].value = '';
                // Hide the submit button after 3 seconds
                setTimeout(function() {
                  submitButton.style.display = 'none'; // Hide the button
                }, 3000);
              })
              .catch(error => {
                console.error("Error al enviar el mensaje:", error);
                // Optional: Alert for error handling
                // alert("Hubo un error al enviar el mensaje.");
              });
            } else {
              alert("Please write a message before submitting.");
            }
          }
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
