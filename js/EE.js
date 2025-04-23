let clickCount = 0;           // Contador de clics
let firstClickTime = null;     // Hora del primer clic
const maxClicks = 10;          // Número de clics requeridos
const timeLimit = 5000;        // Tiempo límite en milisegundos (5s)
const logo = document.getElementById('special-logo'); 
const logoLink = document.querySelector('.navbar-brand'); 

logo.addEventListener('click', (event) => {
  event.preventDefault();
  const currentTime = new Date().getTime();

  // Si es el primer clic, guardamos el tiempo
  if (!firstClickTime) {
    firstClickTime = currentTime;
  }

  // Si está dentro del tiempo límite, incrementamos el contador
  if (currentTime - firstClickTime <= timeLimit) {
    clickCount++;
  } else {
    // Si el tiempo supera los 5s, reiniciamos
    clickCount = 1;
    firstClickTime = currentTime;
  }

  // Si se alcanzan los 10 clics dentro del tiempo
  if (clickCount >= maxClicks) {
    // Cambiar el logo
    logo.src = '/img/eventos/2025-PLANCKS/Emoji/logo_ee.png';  // Cambia la imagen
    logo.alt = "EE Logo";  // Cambia el texto alt
    logoLink.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0&t=1s';  // Cambia el enlace

    // Cambiar un estilo visual del logo (si es necesario)
    // logo.classList.add('changed');  // Añadir una clase si quieres agregar algún estilo

    // Opcional: Restablecer después de unos segundos
    setTimeout(() => {
      logo.src = '/img/eventos/2025-PLANCKS/Logo.png';  // Restablece la imagen original
      logo.alt = "PLANCKS 2025 Logo";  // Restablece el texto alt
      logoLink.href = '/PLANCKS25/';  // Restablece el enlace original
      // logo.classList.remove('changed');
      clickCount = 0;  // Reinicia el contador de clics
      firstClickTime = null;  // Reinicia el temporizador
    }, 5000);  // Restablece después de 3 segundos, por ejemplo
  }
});
