// Modified for PLANCKS25 - Commented down below the previous code
class Carousel {
    constructor(element) {
      this.carousel = element;
      this.items = Array.from(this.carousel.querySelectorAll('.carousel-item'));
      this.currentIndex = 0;
      this.touchStartX = 0;
      
      this.initialize();
    }
    
    initialize() {
      this.setupButtons();
      this.setupTouch();
      this.startAutoPlay();
      this.updateCarousel();
    }
    
    setupButtons() {
      const container = this.carousel.parentElement;
      
      const prevButton = document.createElement('button');
      prevButton.className = 'carousel-button prev';
      prevButton.innerHTML = '←';
      prevButton.onclick = () => this.prev();
      
      const nextButton = document.createElement('button');
      nextButton.className = 'carousel-button next';
      nextButton.innerHTML = '→';
      nextButton.onclick = () => this.next();
      
      container.appendChild(prevButton);
      container.appendChild(nextButton);
    }
    
    setupTouch() {
      this.carousel.addEventListener('touchstart', e => {
        this.touchStartX = e.touches[0].clientX;
      });
      
      this.carousel.addEventListener('touchmove', e => {
        const diff = this.touchStartX - e.touches[0].clientX;
        if (Math.abs(diff) > 50) {
          diff > 0 ? this.next() : this.prev();
          this.touchStartX = e.touches[0].clientX;
        }
      });
    }
    
    startAutoPlay() {
      setInterval(() => this.next(), 5000);
    }
    
    updateCarousel() {
      this.items.forEach((item, index) => {
        item.classList.toggle('active', index === this.currentIndex);
        const offset = (index - this.currentIndex) * 100;
        item.style.transform = `translateX(${offset}%)`;
      });
    }
    
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.updateCarousel();
    }
    
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.updateCarousel();
    }
  }
  
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new Carousel(carousel));
  });



// const carousel = document.querySelector('.carousel');
// let isDragging = false;
// let startX;
// let scrollLeft;

// // Evento para el inicio del arrastre
// carousel.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     startX = e.pageX - carousel.offsetLeft;
//     scrollLeft = carousel.scrollLeft;
// });

// // Evento para salir del carrusel
// carousel.addEventListener('mouseleave', () => {
//     isDragging = false;
// });

// // Evento para soltar el botón del mouse
// carousel.addEventListener('mouseup', () => {
//     isDragging = false;
// });

// // Evento para mover el ratón mientras se arrastra
// carousel.addEventListener('mousemove', (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.pageX - carousel.offsetLeft;
//     const walk = (x - startX) * 2; // El 2 puede ser ajustado para cambiar la velocidad de desplazamiento
//     carousel.scrollLeft = scrollLeft - walk;
// });

// // Soporte para pantallas táctiles (touch)
// carousel.addEventListener('touchstart', (e) => {
//     isDragging = true;
//     startX = e.touches[0].pageX - carousel.offsetLeft;
//     scrollLeft = carousel.scrollLeft;
// });

// carousel.addEventListener('touchend', () => {
//     isDragging = false;
// });

// carousel.addEventListener('touchmove', (e) => {
//     if (!isDragging) return;
//     e.preventDefault();
//     const x = e.touches[0].pageX - carousel.offsetLeft;
//     const walk = (x - startX) * 2;
//     carousel.scrollLeft = scrollLeft - walk;
// });
