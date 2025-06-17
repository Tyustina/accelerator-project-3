import Swiper from 'swiper';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';


new Swiper('.hero__swiper', {
  modules: [Pagination, Mousewheel],
  loop: true,
  slidesPerView: 1,
  allowTouchMove: true,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
    bulletActiveClass: 'hero__bullet--active',
    renderBullet: function (index, className) {
      return `<button class='${className} hero__bullet' tabindex='0' role='button' type='button' aria-label='Перейти на страницу ${index + 1}' ></button>`;
    },
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  }
});
