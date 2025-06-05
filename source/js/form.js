const selectElement = document.querySelector('.form__select');
const selectItems = document.querySelectorAll('.form__select-item');
const selectInput = document.querySelector('.form__input-select');

selectElement.addEventListener('click', () =>{
  if(selectElement.classList.contains('form__select--closed')){
    selectElement.classList.remove('form__select--closed');
    selectElement.classList.add('form__select--opened');
  } else {
    selectElement.classList.add('form__select--closed');
    selectElement.classList.remove('form__select--opened');

  }
});


selectItems.forEach ((item)=>{
  item.addEventListener('click',()=> {
    selectInput.value = item.textContent;
    selectElement.classList.add('form__select--closed');
    selectElement.classList.remove('form__select--opened');
  });
});
