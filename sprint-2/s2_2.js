//Question 4
const name = 'Ada';

console.log(`My name is ${name}.`);

//Question 5
const name = 'Stephanie';

console.log(`Stephanie tiene ${name.length} caracteres`);

//Question 9
const list = document.querySelector('.list');

list.innerHTML = `<li>${4 + 5}</li>`;

//Question 10
const list = document.querySelector('.list');
const name = 'Mary';

list.innerHTML = `<li>${name}</li>`;
list.classList.add('name--item');