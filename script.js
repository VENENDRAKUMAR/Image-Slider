let currentSlide = 0;

function showSlide(i) {
    const slides = document.querySelectorAll('.slide');
    if (i >= slides.length) {
        currentSlide = 0;
    } else if (i < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = i;
    }

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 2000);

// Initial call to display the first slide
showSlide(currentSlide);
