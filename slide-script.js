// JavaScript for Navigation Buttons

const customerSlider = document.querySelector('.customer-slider');
const customerSlides = Array.from(document.querySelectorAll('.customer-slide'));
const customerPrevButton = document.querySelector('.customer-prev-slide');
const customerNextButton = document.querySelector('.customer-next-slide');

let visibleSlides = 3; // Default number of slides to show at once
let currentIndex = 0;

function updateVisibleSlides() {
    if (window.innerWidth <= 768) {
        visibleSlides = 2; // Show 2 images on mobile screens
    } else {
        visibleSlides = 3; // Show 3 images on desktop screens
    }
}

function showSlide(index) {
    const offset = -index * (100 / visibleSlides);
    customerSlider.style.transform = `translateX(${offset}%)`;
    currentIndex = index;
}

function prevSlide() {
    if (currentIndex > 0) {
        showSlide(currentIndex - 1);
    }
}

function nextSlide() {
    if (currentIndex < customerSlides.length - visibleSlides) {
        showSlide(currentIndex + 1);
    }
}

// Handle click events for buttons
customerPrevButton.addEventListener('click', prevSlide);
customerNextButton.addEventListener('click', nextSlide);

// Update visibleSlides on window resize
window.addEventListener('resize', () => {
    updateVisibleSlides();
    showSlide(currentIndex); // Adjust to the current slide
});

// Initial setup
updateVisibleSlides();
showSlide(currentIndex);


