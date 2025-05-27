import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css';

new Swiper('.programs__slider', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.programs__toggle--next',
    prevEl: '.programs__toggle--prev',
  },
});
