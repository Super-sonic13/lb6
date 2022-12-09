const prev = document.querySelector(".slider__arrow--prev");
const next = document.querySelector(".slider__arrow--next");
const slides = document.getElementsByClassName("slider__image");
const dots = document.querySelectorAll(".slider-dot");
let slideIndex = 0;

const showSlides = (n) => {
  if (n > slides.length - 1) {
    (n = 0), (slideIndex = n);
  }
  if (n < 0) {
    n = slides.length - 1;
    slideIndex = n;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("slider-dot--active");
  }

  slides[n].style.display = "flex";
  dots[n].classList.add("slider-dot--active");
};

showSlides(slideIndex);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlides(i);
  });
});

prev.addEventListener("click", () => showSlides(--slideIndex));
next.addEventListener("click", () => showSlides(++slideIndex));
