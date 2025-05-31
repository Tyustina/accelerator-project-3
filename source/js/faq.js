const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((faqItem) => {
  const faqAnswer = faqItem.querySelector('div');

  faqAnswer.style.maxHeight = '0';
  faqAnswer.style.overflow = 'hidden';
  faqAnswer.style.transition = 'max-height 0.3s ease-out';

  if(faqItem.classList.contains('faq__item--opened')) {
    faqAnswer.style.maxHeight = `${faqAnswer.scrollHeight}px`;
    faqAnswer.style.marginTop = '20px';
  }

  faqItem.addEventListener('click', () => {
    if (faqItem.classList.contains('faq__item--opened')) {
      faqItem.classList.remove('faq__item--opened');
      faqAnswer.style.maxHeight = '0';
      faqAnswer.style.marginTop = '0';

    } else {
      faqItem.classList.add('faq__item--opened');
      faqAnswer.style.maxHeight = `${faqAnswer.scrollHeight}px`;
      faqAnswer.style.marginTop = '20px';
    }
  });
});
