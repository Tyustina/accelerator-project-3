const selectElement = document.querySelector('.pop-up__select');
const selectItems = document.querySelectorAll('.pop-up__select-item');
const selectInput = document.querySelector('.pop-up__input-select');

selectElement.addEventListener('click', () =>{
  if(selectElement.classList.contains('pop-up__select--closed')){
    selectElement.classList.remove('pop-up__select--closed');
    selectElement.classList.add('pop-up__select--opened');
  } else {
    selectElement.classList.add('pop-up__select--closed');
    selectElement.classList.remove('pop-up__select--opened');

  }
});

selectItems.forEach ((item)=>{
  item.addEventListener('click',()=> {
    selectInput.value = item.textContent;
    selectElement.classList.add('pop-up__select--closed');
    selectElement.classList.remove('pop-up__select--opened');
  });
});
