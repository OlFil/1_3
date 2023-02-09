function initializeApp() {
    let sliderToggleButton = document.querySelector('.slider__read-more-btn');
    let sliderToggleButtonText=sliderToggleButton.querySelector('.read-more-btn__text');
    let sliderToggleButtonImg=sliderToggleButton.querySelector('.read-more-btn__icon');
    let sliderList = document.querySelector('.slider__brands');


    sliderToggleButton.addEventListener("click", () => {
        
        sliderToggleButtonImg.classList.toggle('read-more-btn__icon--rotate');
        sliderList.classList.toggle('slider__brands--hidden');

        if (sliderToggleButtonImg.classList.contains('read-more-btn__icon--rotate')) {
            sliderToggleButtonText.textContent = 'Скрыть';

        } else {
            sliderToggleButtonText.textContent = 'Показать все';
        }
    });
}

document.addEventListener("DOMContentLoaded", initializeApp);