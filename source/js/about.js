const aboutSection = document.querySelector('.about');
const aboutBtn = document.querySelector('.about__button');
const modal = aboutSection.querySelector('.pop-up');
const closeBtn = aboutSection.querySelector('.pop-up__cross');

function openModal() {
  modal.classList.remove('pop-up--closed');
  modal.classList.add('pop-up--opened');
}

function closeModal() {
  modal.classList.add('pop-up--closed');
  modal.classList.remove('pop-up--opened');
}
aboutBtn.addEventListener('click', () => {
  openModal();
});

closeBtn.addEventListener('click', () => {
  closeModal();
});
