let touchStartX = 0;
let touchEndX = 0;
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

showSlide(currentSlide);

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    dots.forEach(dot => {
        dot.classList.remove('active-dot');
    });

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].style.display = 'block';
    dots[currentSlide].classList.add('active-dot');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

carouselContainer.addEventListener('touchstart', touchStart);
carouselContainer.addEventListener('touchmove', touchMove);
carouselContainer.addEventListener('touchend', touchEnd);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

function touchStart(e) {
    touchStartX = e.touches[0].clientX;
}

function touchMove(e) {
    touchEndX = e.touches[0].clientX;
}

function touchEnd() {
    const diffX = touchStartX - touchEndX;

    if (diffX > 50) {
        nextSlide(); // Swipe left (move to next slide)
    } else if (diffX < -50) {
        prevSlide(); // Swipe right (move to previous slide)
    }
}
function changeButtonText() {
    var button = document.getElementById('addToCartBtn');
    button.innerText = 'Added to Cart';
}


const productList = document.getElementById('rtn-product-list');
let isDown = false;
let startX;
let scrollLeft;

// When the user presses the mouse button
productList.addEventListener('mousedown', (e) => {
    isDown = true;
    productList.classList.add('active'); // Optionally add a class to indicate the active state
    startX = e.pageX - productList.offsetLeft;
    scrollLeft = productList.scrollLeft;
});

// When the user moves the mouse out of the product list area
productList.addEventListener('mouseleave', () => {
    isDown = false;
    productList.classList.remove('active'); // Remove the active class
});

// When the user releases the mouse button
productList.addEventListener('mouseup', () => {
    isDown = false;
    productList.classList.remove('active'); // Remove the active class
});

// When the user moves the mouse while holding down the button
productList.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Exit if the mouse is not down
    e.preventDefault(); // Prevent text selection and other default behaviors
    const x = e.pageX - productList.offsetLeft; // Get current mouse position
    const walk = (x - startX) * 2; // Adjust scrolling speed (you can modify the multiplier for faster or slower scrolling)
    productList.scrollLeft = scrollLeft - walk; // Scroll the product list
});

// Optional: Add smooth scrolling when dragging stops
productList.style.scrollBehavior = 'smooth';





