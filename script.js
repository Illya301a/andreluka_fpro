const slides = document.querySelectorAll(".slide")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

let currentSlide = 0

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = "block"
        } else {
            slide.style.display = "none"
        }
    });

    prevBtn.style.display = currentSlide === 0 ? "none" : "block"
    nextBtn.style.display = currentSlide === slides.length - 1 ? "none" : "block"
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++
        showSlide()
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--
        showSlide()
    }
}

nextBtn.addEventListener("click", nextSlide)
prevBtn.addEventListener("click", prevSlide)

showSlide()
