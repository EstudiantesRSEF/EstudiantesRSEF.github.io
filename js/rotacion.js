window.onload = function () {
    console.log("JavaScript cargado correctamente!");

    const images = {
        desktop: [
            "/img/eventos/2024-ENEF/Galeria/ENEF23GaleriaBig.png",
            "/img/eventos/2024-ENEF/Galeria/ENEF24GaleriaBig.png"
        ],
        mobile: [
            "/img/eventos/2024-ENEF/Galeria/ENEF23GaleriaSmall.png",
            "/img/eventos/2024-ENEF/Galeria/ENEF24GaleriaSmall.png"
        ]
    };

    const labels = ["ENEF Oviedo 2023", "ENEF Granada 2024"];

    let currentIndex = 0;
    const desktopImg = document.getElementById("desktop-img");
    const mobileImg = document.getElementById("mobile-img");
    const eventLabel = document.getElementById("event-label");
    const scrollContainer = document.querySelector(".scroll-container");

    if (!desktopImg || !mobileImg || !eventLabel || !scrollContainer) {
        console.error("No se encontraron las imágenes o el contenedor. Revisa los IDs.");
        return;
    }

    function updateImages(index) {
        currentIndex = index;
        desktopImg.src = images.desktop[currentIndex];
        mobileImg.src = images.mobile[currentIndex];
        eventLabel.textContent = labels[currentIndex];
    }

    // Habilitar swipe en móviles
    let startX = 0;
    let endX = 0;

    scrollContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    scrollContainer.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    scrollContainer.addEventListener("touchend", () => {
        let deltaX = startX - endX;
        if (deltaX > 50) {
            // Swipe a la izquierda (mostrar siguiente imagen)
            currentIndex = (currentIndex + 1) % images.desktop.length;
        } else if (deltaX < -50) {
            // Swipe a la derecha (mostrar imagen anterior)
            currentIndex = (currentIndex - 1 + images.desktop.length) % images.desktop.length;
        }
        updateImages(currentIndex);
    });

    // Cambia imágenes automáticamente cada 5 segundos (solo en escritorio)
    if (window.innerWidth > 768) {
        setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.desktop.length;
            updateImages(nextIndex);
        }, 5000);
    }
};
