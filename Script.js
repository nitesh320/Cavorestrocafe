// DARK/LIGHT MODE
const toggle = document.getElementById("mode-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// HERO SLIDER
let slideIndex = 0;
const slides = document.querySelectorAll(".hero-slider .slide");
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector(".hero-slider .slides");
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Next/Prev Controls
document.querySelector(".next").addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
});
document.querySelector(".prev").addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
});

// Auto-slide every 5 sec
setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}, 5000);
