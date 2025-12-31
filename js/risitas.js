document.addEventListener('DOMContentLoaded', function() {
    // Configuración
    const targetPersonId = 'person-img-emma-rebollar-cuenca';
    const clicksRequired = 10;
    let clickCounter = 0;

    // --- Aseguramos que existan los keyframes para la animación 'spin' ---
    // (Esto es opcional si ya lo tienes en tu CSS, pero lo agrego por si acaso)
    if (!document.getElementById('spin-style')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'spin-style';
        styleSheet.innerText = `
            @keyframes spin { 
                from { transform: rotate(0deg); } 
                to { transform: rotate(360deg); } 
            }
        `;
        document.head.appendChild(styleSheet);
    }

    // Delegación de eventos
    document.body.addEventListener('click', function(event) {
        
        // Verificamos si es la foto de Emma
        if (event.target && event.target.id === targetPersonId) {
            
            clickCounter++;
            console.log(`Clics en Emma: ${clickCounter}`);

            if (clickCounter === clicksRequired) {
                triggerEasterEgg(event.target);
                clickCounter = 0; // Reseteamos contador
            }
        }
    });

    // Función que realiza el cambio visual
    function triggerEasterEgg(imgElement) {
        // 1. Preparamos el contenedor del Emoji
        const emojiContainer = document.createElement('div');
        emojiContainer.innerText = '🤣';
        
        // Estilos
        emojiContainer.style.fontSize = '100px'; 
        emojiContainer.style.display = 'flex';
        emojiContainer.style.justifyContent = 'center';
        emojiContainer.style.alignItems = 'center';
        emojiContainer.style.height = imgElement.offsetHeight + 'px'; 
        emojiContainer.style.width = '100%'; // O el ancho original de la imagen
        emojiContainer.style.backgroundColor = '#f0f0f0';
        emojiContainer.style.cursor = 'pointer'; // Para indicar que es clickeable
        
        // Iniciamos la rotación
        emojiContainer.style.animation = 'spin 1s linear infinite'; 
        
        // 2. Reemplazamos la imagen por el emoji
        // Nota: imgElement sigue existiendo en memoria, solo se ha sacado del DOM.
        imgElement.replaceWith(emojiContainer);

        // 3. Lógica para detener rotación y permitir restauración
        setTimeout(() => {
            // A. Detener la rotación después de 2 segundos
            emojiContainer.style.animation = 'none';
            
            // B. Habilitar el clic para restaurar
            // Usamos { once: true } para que el evento se elimine solo tras usarse
            emojiContainer.addEventListener('click', function() {
                // Volvemos a poner la imagen original donde estaba el emoji
                emojiContainer.replaceWith(imgElement);
            }, { once: true });

        }, 2000); // 2000 milisegundos = 2 segundos
    }
});