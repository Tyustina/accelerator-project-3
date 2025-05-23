const nav = document.querySelector('.nav');
const dropDownLists = nav.querySelectorAll('.drop-down-list');
const navBtn = nav.querySelector('.nav__button');

navBtn.addEventListener('click', () =>{
  if(nav.classList.contains('nav--opened')) {
    nav.classList.remove('nav--opened');
    nav.classList.add('nav--closed');
  } else {
    nav.classList.add('nav--opened');
    nav.classList.remove('nav--closed');
  }
});

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
