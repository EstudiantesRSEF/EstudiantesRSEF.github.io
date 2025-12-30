// 1. Seleccionamos la imagen
const logo = document.getElementById('foto-emma');

// 2. Seleccionamos el enlace padre AUTOMÁTICAMENTE (el que tiene la clase modal-trigger)
// Esto busca la etiqueta <a> más cercana hacia arriba
const logoLink = logo.closest('a'); 

// 3. Guardamos los valores ORIGINALES para poder restaurarlos después
const originalSrc = logo.src;
const originalAlt = logo.alt;
const originalHref = logoLink.href; // Guardamos el enlace al modal (#...)

// Variables de lógica
let clickCount = 0;
let firstClickTime = null;
const maxClicks = 10;
const timeLimit = 5000; // 5 segundos

logo.addEventListener('click', (event) => {
  const currentTime = new Date().getTime();

  // Gestión del tiempo (si pasan 5s, reseteamos)
  if (!firstClickTime || (currentTime - firstClickTime > timeLimit)) {
    clickCount = 1; // Primer clic de la nueva serie
    firstClickTime = currentTime;
  } else {
    clickCount++;
  }

  // --- LÓGICA DEL CLIC ---
  
  if (clickCount < maxClicks) {
    // Si NO hemos llegado a 10, evitamos que se abra el modal normal
    event.preventDefault();
    event.stopPropagation(); // Importante para que no burbujee
    console.log(`Llevas ${clickCount} clics...`);

  } else if (clickCount === maxClicks) {
    // ¡HAS LLEGADO A 10!
    
    // 1. Evitamos que se abra el modal en este clic exacto
    event.preventDefault(); 
    
    // 2. Cambiamos la imagen y el enlace (Easter Egg)
    // OJO: Pon aquí la ruta de la imagen "graciosa" o "secreta"
    logo.src = '/img/junta25-27/Emma_Sorpresa.png'; 
    logo.alt = "Has encontrado el secreto";
    
    // 3. OPCIÓN A: Redirigir automáticamente a la página secreta
    window.location.href = 'https://estudiantes.rsef.es/PLANCKS25/secret/';
    
    // 3. OPCIÓN B: (Si prefieres solo cambiar el link y que pulsen otra vez, usa esta)
    // logoLink.href = 'https://estudiantes.rsef.es/PLANCKS25/secret/';
    
    // Restaurar todo después de 5 segundos (por si vuelven atrás)
    setTimeout(() => {
      logo.src = originalSrc;
      logo.alt = originalAlt;
      logoLink.href = originalHref;
      clickCount = 0;
      firstClickTime = null;
    }, 5000);
  }
});