import { showOverlay, hideOverlay, bodyPage } from './nav.js';
const aboutSection = document.querySelector('.about');
const aboutBtn = document.querySelector('.about__button');
const modal = aboutSection.querySelector('.pop-up');
const closeBtn = aboutSection.querySelector('.pop-up__cross');

function openModal() {
  modal.classList.remove('pop-up--closed');
  modal.classList.add('pop-up--opened');
}

export function closeModal() {
  modal.classList.add('pop-up--closed');
  modal.classList.remove('pop-up--opened');
}

aboutBtn.addEventListener('click', () => {
  openModal();
  showOverlay();
  bodyPage.classList.remove('no-scroll');
});

closeBtn.addEventListener('click', () => {
  closeModal();
  hideOverlay();
});

bodyPage.addEventListener('mousedown', (e) => {
  if (!modal.contains(e.target)) {
    closeModal();
    hideOverlay();
  }
});
