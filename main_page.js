    function toggleMenu() {
        const menu = document.querySelector('.navbar-menu');
        menu.classList.toggle('show');
    }

    function searchAction() {
        alert('Pencarian diaktifkan!');
    }


    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel img");
    const slideWidth = slides[0].clientWidth;
    
    // Clone slides for seamless loop
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    
    carousel.appendChild(firstClone);
    carousel.insertBefore(lastClone, slides[0]);
    
    let currentIndex = 1; // Start from the first real slide
    carousel.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    
    const indicators = document.querySelector(".carousel-indicators");
    
    // Create indicators dynamically
    slides.forEach((_, index) => {
      const indicator = document.createElement("div");
      if (index === 0) indicator.classList.add("active");
      indicator.addEventListener("click", () => goToSlide(index + 1));
      indicators.appendChild(indicator);
    });
    
    const indicatorDots = document.querySelectorAll(".carousel-indicators div");
    
    function updateIndicators() {
      indicatorDots.forEach((dot, index) => {
        if (index === currentIndex - 1) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }
    
    function moveToIndex(index) {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(${-slideWidth * index}px)`;
      updateIndicators();
    }
    
    function nextSlide() {
      currentIndex++;
      moveToIndex(currentIndex);
    
      if (currentIndex === slides.length + 1) {
        setTimeout(() => {
          carousel.style.transition = "none";
          currentIndex = 1;
          carousel.style.transform = `translateX(${
            -slideWidth * currentIndex
          }px)`;
          updateIndicators();
        }, 500);
      }
    }
    
    function prevSlide() {
      currentIndex--;
      moveToIndex(currentIndex);
    
      if (currentIndex === 0) {
        setTimeout(() => {
          carousel.style.transition = "none";
          currentIndex = slides.length;
          carousel.style.transform = `translateX(${
            -slideWidth * currentIndex
          }px)`;
          updateIndicators();
        }, 500);
      }
    }
    
    function goToSlide(index) {
      currentIndex = index;
      moveToIndex(currentIndex);
    }