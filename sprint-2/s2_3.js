//Question 3
const price = 99;
if (price > 10){
  console.log('Es un producto muy caro');
} else {
  console.log('Es un producto muy barato');
}

//Question 4
const price = 9;
if (price > 10){
  console.log('Es un producto muy caro');
} else {
  console.log('Es un producto muy barato');
}

//Question 5
const name = 'María';

if(name.length >= 6){
  console.log(`${name} es un nombre largo`);
}

//Question 6
const name = 'María';
const age = 35;

if(name === 'Marta' || age >= 30){
  console.log(`${name} es Marta o mayor de 30`);
}

//Question 7
const name = 'María';
const age = 35;

if(name === 'Marta' && age >= 30){
  console.log(`${name} es Marta y mayor de 30`);
}

//Question 8
const name = 'María';
const age = 35;

if(name === 'Marta') {
  console.log(`Soy Marta y tengo ${age} años`);
} else if(age < 35) {
  console.log(`Soy ${name} y tengo menos de 35`);
} else {
  console.log(`Soy ${name} y tengo 35 o más`);
}

//Question 10
const collapsable = document.querySelector('.collapsable');

if (collapsable.classList.contains('hidden')) {
  collapsable.classList.remove('hidden');
} else {
  collapsable.classList.add('hidden');
}