document.addEventListener('DOMContentLoaded', () => {
  // Menu responsivo
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  // Slideshow
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  function changeSlide(step) {
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  // Troca automática
  setInterval(() => {
    changeSlide(1);
  }, 5000);

  showSlide(slideIndex);
});
let slideIndex = 0;
const slidesDesktop = document.querySelectorAll(".slides-desktop .slide");
const slidesMobile = document.querySelectorAll(".slides-mobile .slide");

function showSlide(index) {
  const isMobile = window.innerWidth <= 768;
  const slides = isMobile ? slidesMobile : slidesDesktop;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function changeSlide(step) {
  const isMobile = window.innerWidth <= 768;
  const slides = isMobile ? slidesMobile : slidesDesktop;

  slideIndex = (slideIndex + step + slides.length) % slides.length;
  showSlide(slideIndex);
}

setInterval(() => {
  changeSlide(1);
}, 5000); // troca a cada 5 segundos

window.addEventListener("resize", () => {
  showSlide(slideIndex);
});

showSlide(slideIndex); // exibir slide inicial
