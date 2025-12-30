document.addEventListener('DOMContentLoaded', function() {
    // Configuración
    const targetPersonId = 'person-img-emma'; // El ID que generamos con Liquid para Emma
    const clicksRequired = 10;                // Número de clics necesarios
    let clickCounter = 0;                     // Contador interno

    // Usamos delegación de eventos (body) para capturar el clic incluso dentro del modal
    document.body.addEventListener('click', function(event) {
        
        // 1. Verificamos si el elemento clickeado es la foto de Emma
        if (event.target && event.target.id === targetPersonId) {
            
            clickCounter++;
            console.log(`Clics en Emma: ${clickCounter}`); // Opcional: para depurar

            // 2. Si llegamos a los 10 clics
            if (clickCounter === clicksRequired) {
                triggerEasterEgg(event.target);
                clickCounter = 0; // Reseteamos por si quieren hacerlo de nuevo tras recargar
            }
        }
    });

    // Función que realiza el cambio visual
    function triggerEasterEgg(imgElement) {
        // Creamos un contenedor para el emoji
        const emojiContainer = document.createElement('div');
        emojiContainer.innerText = '🤣'; // Emoji de la risa
        
        // Estilos para que el emoji ocupe el lugar de la foto
        emojiContainer.style.fontSize = '100px'; 
        emojiContainer.style.display = 'flex';
        emojiContainer.style.justifyContent = 'center';
        emojiContainer.style.alignItems = 'center';
        emojiContainer.style.height = imgElement.offsetHeight + 'px'; // Mantiene la altura original
        emojiContainer.style.width = '100%';
        emojiContainer.style.backgroundColor = '#f0f0f0'; // Fondo opcional
        
        // Efecto de animación simple (opcional)
        emojiContainer.style.animation = 'spin 1s linear infinite'; // Si quieres que gire
        
        // Reemplazamos la imagen por el emoji
        imgElement.replaceWith(emojiContainer);
    }
});