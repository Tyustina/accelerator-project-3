import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';

new Swiper('.programs__slider', {
  modules: [Navigation],
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.programs__toggle--next',
    prevEl: '.programs__toggle--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,
    }
  }
});
