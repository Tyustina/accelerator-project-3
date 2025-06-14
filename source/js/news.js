import Swiper from 'swiper';
import { Navigation, Pagination, Grid} from 'swiper/modules';
import 'swiper/css';

new Swiper('.news__swiper', {
  modules: [Navigation, Pagination, Grid],
  loop: false,
  spaceBetween: 20,
  slidesPerView: 2,
  grid: {
    rows: 2,
    fill: 'column',
  },
  breakpoints: {},
});

// const tabsList = document.querySelector('.news');

// tabsList.addEventListener('click', (e) => {
//   if (e.target && !e.target.closest('.news__tabs')) {
//     return;
//   }

//   const btn = e.target.closest('.news__tab');
//   showTab(btn);
// });

// function showTab(btn) {
//   if (btn.classList.contains('news__tab--active')) {
//     return;
//   }
//   const targetId = btn.dataset.targetId;
//   const tabList = tabsList.querySelector(`.news__list[data-id="${targetId}"]`);

//   if (tabList) {
//     const tabActive = tabsList.querySelector('.news__tab--active');
//     const tabListActive = tabsList.querySelector('.news__list--active');
//     tabActive.classList.remove('news__tab--active');
//     tabListActive.classList.remove('news__list--active');
//     btn.classList.add('news__tab--active');
//     tabList.classList.add('news__list--active');
//   }
// }
