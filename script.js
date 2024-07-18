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

        productList.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - productList.offsetLeft;
            scrollLeft = productList.scrollLeft;
        });

        productList.addEventListener('mouseleave', () => {
            isDown = false;
        });

        productList.addEventListener('mouseup', () => {
            isDown = false;
        });

        productList.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - productList.offsetLeft;
            const walk = (x - startX) * 2; // Adjust scrolling speed
            productList.scrollLeft = scrollLeft - walk;
        });