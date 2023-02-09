const mediaQuery = window.matchMedia('(min-width: 768px)');
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

function handleTabletChange(e) {
  if (e.matches) {
    swiper.destroy();
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
