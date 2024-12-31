


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const sliders = document.querySelectorAll('.slider');
const sliderContainer = document.querySelector('.slider-container');

let currentSlider = 0;

prevBtn.addEventListener('click', () => {
    currentSlider = (currentSlider - 1 + sliders.length) % sliders.length;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentSlider = (currentSlider + 1) % sliders.length;
    updateSlider();
});

function updateSlider() {
    sliders.forEach((slider, index) => {
        slider.classList.remove('active');
        if (index === currentSlider) {
            slider.classList.add('active');
        }
    });
}

