let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlide(currentSlide + n);

}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setTimeout(autoSlide, 5000);
});
