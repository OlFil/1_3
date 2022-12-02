function ready() {
    let slider__toggle = true;
    let slider__toggleButton = document.querySelector('.slider__read-more-btn');
    let slider__list = document.querySelector('.slider__brands');
    slider__list.style.height = '160px';
    slider__list.style.overflow = 'hidden';

    let img = document.createElement("img");
    img.classList.add('read-more-btn__icon');


    slider__toggleButton.addEventListener("click", () => {

        if (slider__toggle) {
            slider__list.style.height = 'auto';
            slider__toggleButton.innerHTML = 'Скрыть';
            img.src = "..1_3/assets/svg/icon.svg";
            slider__toggleButton.prepend(img)
        } else {
            slider__list.style.height = '160px';
            slider__list.style.overflow = 'hidden';
            slider__toggleButton.innerHTML = 'Показать все';
            img.src = "..1_3/assets/svg/more.svg";
            slider__toggleButton.prepend(img)
        }

        slider__toggle = !slider__toggle;
    });
}

document.addEventListener("DOMContentLoaded", ready);