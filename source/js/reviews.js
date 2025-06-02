import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


new Swiper('.reviews__slider', {
  modules: [Navigation],
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.reviews__toggle--next',
    prevEl: '.reviews__toggle--prev',
  },
  scrollbar: {
    el: '.reviews__scrollbar',
    snap: true,
    scrollbarType: 'dynamic',
    hide: false, // Установите в `true`, чтобы скрыть скроллбар, если он не нужен
  },
  breakpoints: {
    768: {
      slidesPerView: 1.2,
    },
    1440: {
      slidesPerView: 2,
      allowTouchMove: false,
    }
  }
});
