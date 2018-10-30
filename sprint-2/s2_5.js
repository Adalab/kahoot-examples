//Question 2
const button = document.querySelector('.alert');
const showAlert = () => console.log('Alerta');
button.addEventListener('click', showAlert);

//Question 4
const danger = () => console.log('¡¡Cuidado con el botón!!');

const element = document.querySelector('.button');
element.addEventListener('mouseover', danger);

//Question 5
const danger = () => console.log('¡¡Cuidado con el botón!!');

const element = document.querySelector('.button');
element.addEventListener('click');

//Question 6
const hideModal = () => {
  const modal = document.querySelector('.modal');
  modal.classList.add('hidden');
}

const button = document.querySelector('.button');
button.addEventListener('click', hideModal);