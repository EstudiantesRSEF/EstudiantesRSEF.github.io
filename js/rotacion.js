// Listado de imágenes de ENEF 2023 y ENEF 2024
const images = {
    desktop: [
        "/img/eventos/2024-ENEF/Galeria/ENEF23GaleriaBig.png",
        "/img/eventos/2025-ENEF/Galeria/ENEF24GaleriaBig.png"
    ],
    mobile: [
        "/img/eventos/2024-ENEF/Galeria/ENEF23GaleriaSmall.png",
        "/img/eventos/2025-ENEF/Galeria/ENEF24GaleriaSmall.png"
    ]
};

let currentIndex = 0;
const desktopImg = document.getElementById("desktop-img");
const mobileImg = document.getElementById("mobile-img");
const button = document.getElementById("change-images");

function changeImages() {
    currentIndex = (currentIndex + 1) % images.desktop.length;
    desktopImg.src = images.desktop[currentIndex];
    mobileImg.src = images.mobile[currentIndex];
}

// Cambia las imágenes automáticamente cada 5 segundos
setInterval(changeImages, 5000);

// Permite cambiar las imágenes manualmente con un botón
if (button) {
    button.addEventListener("click", changeImages);
}
