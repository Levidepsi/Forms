// Image Slider
const carouselSlide = document.querySelector('carousel-slide')
const carouselImage = document.querySelectorAll('carousel-slide img')

// buttons
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

// counter
let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px)';

// button Listeners
nextBtn.addEventListener ('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('+ (-size *counter) + 'px)';
})

prevBtn.addEventListener ('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+ (-size *counter) + 'px)';
})