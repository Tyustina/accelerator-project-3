export const bodyPage = document.querySelector('.page-body');
const nav = document.querySelector('.nav');
const dropDownLists = nav.querySelectorAll('.drop-down-list');
const navBtn = nav.querySelector('.nav__button');
const overlay = document.querySelector('.overlay');

navBtn.addEventListener('click', () => {
  if (nav.classList.contains('nav--opened')) {
    closeNav();
    hideOverlay();
  } else {
    openNav();
    showDropDown();
    showOverlay();
  }
});
function showDropDown() {
  dropDownLists.forEach((dropDownList) => {
    const dropDownSublist = dropDownList.querySelector('.drop-down-items');

    dropDownSublist.style.maxHeight = '0';
    dropDownSublist.style.overflow = 'hidden';
    dropDownSublist.style.transition = 'max-height 0.3s ease-out';

    if (dropDownList.classList.contains('drop-down-list--opened')) {
      dropDownSublist.style.maxHeight = `${dropDownSublist.scrollHeight}px`;
    }

    dropDownList.addEventListener('click', (e) => {
      e.stopPropagation();

      if (dropDownList.classList.contains('drop-down-list--opened')) {
        dropDownList.classList.remove('drop-down-list--opened');
        dropDownList.classList.add('drop-down-list--closed');
        dropDownSublist.style.maxHeight = '0';
      } else {
        dropDownList.classList.remove('drop-down-list--closed');
        dropDownList.classList.add('drop-down-list--opened');
        dropDownSublist.style.maxHeight = `${dropDownSublist.scrollHeight}px`;
      }
    });
  });
}
function openNav() {
  nav.classList.add('nav--opened');
  nav.classList.remove('nav--closed');
}

function closeNav() {
  nav.classList.remove('nav--opened');
  nav.classList.add('nav--closed');
}
export function showOverlay() {
  overlay.style.opacity = '1 ';
  overlay.style.display = 'flex';
  bodyPage.classList.add('no-scroll');
}

export function hideOverlay() {
  overlay.style.opacity = '0 ';
  overlay.style.display = 'none';
  bodyPage.classList.remove('no-scroll');
}
