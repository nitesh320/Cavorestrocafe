/* ================================
   DARK / LIGHT MODE
   Dark = Default
================================ */

const toggle = document.getElementById("mode-toggle");

// default state → dark mode
toggle.textContent = "☀️"; // click = light mode

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // update icon
    toggle.textContent = document.body.classList.contains("light")
        ? "🌙"   // light mode → click for dark
        : "☀️";  // dark mode → click for light
});

/* ================================
   HERO SLIDER
================================ */

let slideIndex = 0;
const slides = document.querySelectorAll(".hero-slider .slide");
const totalSlides = slides.length;

function showSlide(index) {
    const slidesContainer = document.querySelector(".hero-slider .slides");
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Next button
document.querySelector(".next").addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
});

// Prev button
document.querySelector(".prev").addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
});

// Auto slide every 5 seconds
setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}, 5000);

const menuImages = document.querySelectorAll('.menu-image');

menuImages.forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.cursor = 'zoom-out';
        overlay.innerHTML = `<img src="${img.src}" style="max-width:90%;max-height:90%;border-radius:10px;">`;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});
