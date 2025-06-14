import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';


new Swiper('.reviews__slider', {
  modules: [Navigation, Scrollbar],
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.reviews__toggle--next',
    prevEl: '.reviews__toggle--prev',
  },
  scrollbar: {
    el: '.reviews__scrollbar',
    draggable: true,
    dragSize: 326 | 'auto',
  },
  breakpoints: {
    768: {
      slidesPerView: 1.2,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      allowTouchMove: false,
      scrollbar: {
        dragSize: 394 | 'auto',
      },
    }
  }
});
