const blocks = document.querySelectorAll('.select-wrapper');

blocks.forEach((block) => {
  const selectInput = block.querySelector('.pop-up__select');
  const selectItems = block.querySelectorAll('.pop-up__select-item');

  selectInput.addEventListener('click', () => {
    if (selectInput.classList.contains('pop-up__select--closed')) {
      selectInput.classList.remove('pop-up__select--closed');
      selectInput.classList.add('pop-up__select--opened');
    } else {
      selectInput.classList.add('pop-up__select--closed');
      selectInput.classList.remove('pop-up__select--opened');

    }
  });

  selectItems.forEach((item) => {
    item.addEventListener('click', () => {
      selectInput.value = item.textContent;
      selectInput.classList.add('pop-up__select--closed');
      selectInput.classList.remove('pop-up__select--opened');
    });
  });
});
