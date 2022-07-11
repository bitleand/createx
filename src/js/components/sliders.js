

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('$gridGap'));

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: $gridGap,
  loop: true,
  navigation: {
    nextEl: '.slider-nav__btn--next',
    prevEl: '.slider-nav__btn--prev',
  },
});
