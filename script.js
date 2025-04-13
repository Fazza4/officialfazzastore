function toggleMenu() {
  const menu = document.querySelector(".navbar-menu");
  menu.classList.toggle("show");
}

function searchAction() {
  alert("Pencarian diaktifkan!");
}

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function updateSlide() {
  const carousel = document.querySelector(".carousel");
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

// Menambahkan fungsi otomatis untuk berganti slide setiap beberapa detik
setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik

function toggleMenu() {
  const menu = document.querySelector(".navbar-menu");
  menu.classList.toggle("show");
}

function updateCarouselImages() {
  const images = document.querySelectorAll(".carousel img");

  images.forEach((img) => {
    if (window.innerWidth <= 480) {
      img.src = img.getAttribute("data-mobile"); // Gambar untuk mobile
    } else if (window.innerWidth <= 768) {
      img.src = img.getAttribute("data-tablet"); // Gambar untuk tablet
    } else {
      img.src = img.getAttribute("data-desktop"); // Gambar untuk desktop
    }
  });
}


// Jalankan fungsi saat halaman dimuat dan diubah ukurannya
window.addEventListener("resize", updateCarouselImages);
window.addEventListener("load", updateCarouselImages);
