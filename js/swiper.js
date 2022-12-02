const slider = document.querySelector('.swiper');

const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    grabCursor: true,
    mousewheel: {
        sensitivity: 1,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    }
});