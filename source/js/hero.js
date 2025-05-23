import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';


new Swiper('.hero__swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
    bulletActiveClass: 'hero__bullet--active',
    renderBullet: function (index, className) {
      return `<button class='${className} hero__bullet' tabindex='0'></button>`;
    },
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  }
});
