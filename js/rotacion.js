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

    let currentIndex = 0;
    const desktopImg = document.getElementById("desktop-img");
    const mobileImg = document.getElementById("mobile-img");
    const indicators = document.querySelectorAll(".indicator");

    if (!desktopImg || !mobileImg || indicators.length < 2) {
        console.error("No se encontraron las imágenes o los indicadores. Revisa los IDs.");
        return;
    }

    function updateImages(index) {
        currentIndex = index;
        desktopImg.src = images.desktop[currentIndex];
        mobileImg.src = images.mobile[currentIndex];

        // Actualizar los indicadores visualmente
        indicators.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    // Agregar eventos de clic a los indicadores
    indicators.forEach((dot, i) => {
        dot.addEventListener("click", () => updateImages(i));
    });

    // Cambia imágenes automáticamente cada 5 segundos
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.desktop.length;
        updateImages(nextIndex);
    }, 5000);
};
