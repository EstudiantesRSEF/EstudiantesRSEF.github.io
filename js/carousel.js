class Carousel {
    constructor(element) {
      this.carousel = element;
      this.items = Array.from(this.carousel.querySelectorAll('.carousel-item'));
      this.currentIndex = 0;
      this.touchStartX = 0;
      
      this.initialize();
    }
    
    initialize() {
      this.createNavigation();
      this.createIndicators();
      this.setupTouch();
      this.startAutoPlay();
      this.updateCarousel();
    }
    
    createNavigation() {
      const nav = document.createElement('div');
      nav.className = 'carousel-nav';
      
      const prevButton = document.createElement('button');
      prevButton.className = 'prev';
      prevButton.innerHTML = '←';
      prevButton.onclick = () => this.prev();
      
      const nextButton = document.createElement('button');
      nextButton.className = 'next';
      nextButton.innerHTML = '→';
      nextButton.onclick = () => this.next();
      
      nav.appendChild(prevButton);
      nav.appendChild(nextButton);
      this.carousel.parentElement.appendChild(nav);
    }
    
    createIndicators() {
      const indicators = document.createElement('div');
      indicators.className = 'carousel-indicators';
      
      this.items.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        indicator.onclick = () => this.goToSlide(index);
        indicators.appendChild(indicator);
      });
      
      this.carousel.parentElement.appendChild(indicators);
      this.indicators = indicators.children;
    }
    
    updateCarousel() {
      const offset = -this.currentIndex * 100;
      this.carousel.style.transform = `translateX(${offset}%)`;
      
      // Update indicators
      Array.from(this.indicators).forEach((indicator, index) => {
        indicator.classList.toggle('active', index === this.currentIndex);
      });
      
      // Update active state of items
      this.items.forEach((item, index) => {
        item.classList.toggle('active', index === this.currentIndex);
      });
    }
    
    goToSlide(index) {
      this.currentIndex = index;
      this.updateCarousel();
    }
  
    setupTouch() {
      // Handle touch events for mobile swipe
      this.carousel.addEventListener('touchstart', e => {
        this.touchStartX = e.touches[0].clientX;
      });
  
      this.carousel.addEventListener('touchmove', e => {
        const diff = this.touchStartX - e.touches[0].clientX;
        if (Math.abs(diff) > 50) {  // Minimum swipe distance
          diff > 0 ? this.next() : this.prev();
          this.touchStartX = e.touches[0].clientX;
        }
      });
    }
  
    startAutoPlay() {
      // Auto-advance every 5 seconds
      this.autoPlayInterval = setInterval(() => this.next(), 5000);
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
  
  // Initialize all carousels when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => new Carousel(carousel));
  });