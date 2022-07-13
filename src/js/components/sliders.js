import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const bodyStyles = window.getComputedStyle(document.body);

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.slider-nav__btn--next',
    prevEl: '.slider-nav__btn--prev',
  },
});
