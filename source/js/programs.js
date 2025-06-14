import Swiper from 'swiper';
import { Navigation, Scrollbar} from 'swiper/modules';
import 'swiper/css';

new Swiper('.programs__slider', {
  modules: [Navigation, Scrollbar],
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.programs__toggle--next',
    prevEl: '.programs__toggle--prev',
  },
  scrollbar: {
    el: '.programs__scrollbar',
    draggable: true,
    dragSize: 326 | 'auto',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,
      scrollbar: {
        dragSize: 394 | 'auto',
      },
    }
  }
});
