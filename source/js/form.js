import { closeModal } from './about.js';
import { hideOverlay } from './nav.js';
const forms = document.querySelectorAll('.pop-up__blank');

forms.forEach((form) => {
  const nameInput = form.querySelector('.pop-up__input--name');
  const telInput = form.querySelector('.pop-up__input--tel');
  const messageInput = form.querySelector('.pop-up__input--text');
  const selectInput = form.querySelector('.pop-up__input-select');
  const agreeCheckbox = form.querySelector('.pop-up__agree-input');

  nameInput.addEventListener('input', () => {
    styleInvalidInput(nameInput, nameInput.validity.valid);
  });

  telInput.addEventListener('input', () => {
    styleInvalidInput(telInput, telInput.validity.valid);
  });

  messageInput.addEventListener('input', () => {
    styleInvalidInput(messageInput, messageInput.validity.valid);
  });

  selectInput.addEventListener('input', () => {
    styleInvalidInput(selectInput, selectInput.validity.valid);
  });

  agreeCheckbox.addEventListener('change', () => { //стилизовать кастомный чекбокс
    const isValid = agreeCheckbox.checked;
    styleInvalidInput(agreeCheckbox.parentElement, isValid);
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isNameValid = nameInput.validity.valid;
    const isTelValid = telInput.validity.valid;
    const isMessageValid = messageInput.validity.valid;
    const isSelectValid = selectInput.validity.valid;
    const isAgreeValid = agreeCheckbox.checked;


    styleInvalidInput(nameInput, isNameValid);
    styleInvalidInput(telInput, isTelValid);
    styleInvalidInput(messageInput, isMessageValid);
    styleInvalidInput(selectInput, isSelectValid);
    styleInvalidInput(agreeCheckbox.parentElement, isAgreeValid);

    if (!nameInput.validity.valid ||
      !telInput.validity.valid ||
      !messageInput.validity.valid ||
      !selectInput.validity.valid ||
      !agreeCheckbox.checked) {
      return;
    }

    const formData = new FormData(form);

    // try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
    });

    if (response.ok) {
      form.reset();
      closeModal();
      hideOverlay();
      showMessage('Сообщение успешно отправлено!', true);
      // console.log('Форма отправлена');
    }
    //     } else {
    //       showMessage('Произошла ошибка при отправке формы. Попробуйте позже.', false);
    //     }
    //   } catch (error) {
    //     showMessage('Произошла ошибка сети. Попробуйте позже.', false);
    //   }
  });
});


function showMessage(message, isSuccess = false) {
  const form = document.querySelector('.pop-up__blank');
  const messageElement = document.createElement('div');
  messageElement.classList.add('pop-up__message');
  messageElement.textContent = message;

  if (isSuccess) {
    messageElement.classList.add('pop-up__message--success');
  } else {
    messageElement.classList.add('pop-up__message--error');
  }

  form.appendChild(messageElement);

  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}

function styleInvalidInput(input, isValid) {
  if (!isValid) {
    input.classList.add('pop-up__input--invalid');
  } else {
    input.classList.remove('pop-up__input--invalid');
  }
}
