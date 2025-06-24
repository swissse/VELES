document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.feedback__form__2');
  const submitButton = form.querySelector('.form__btn__2');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = form.querySelector('input[type="text"][placeholder="Имя"]').value;
    const email = form.querySelector('input[type="text"][placeholder="Почта"]').value;
    const phone = form.querySelector('input[type="text"][placeholder="Телефон"]').value;
    const message = form.querySelector('textarea').value;

    console.log('Форма отправлена:', {
      name: name,
      email: email,
      phone: phone,
      message: message
    });
    
    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
    form.reset();
  });
  submitButton.addEventListener('click', function(e) {
    form.dispatchEvent(new Event('submit'));
  });
});