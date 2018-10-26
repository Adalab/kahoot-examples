//Question 3

function removeMsg(){
  const msg = document.querySelector('.msg');
  msg.innerHTML = '';
}

setTimeout(removeMsg, 3000);


//Question 4

function sayHi(){
  console.log('Hola');
}

setTimeout(sayHi, 1000);
console.log('Adiós');


//Question 5

let counter = 0;;

function incrementAndShowCounter(){
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if(counter === 10){
    clearInterval(temp);
  }
}

const temp = setInterval(incrementAndShowCounter, 2000);


//Question 6

let seconds = 0;

function showSeconds(){
  seconds = seconds + 1;
  console.log(seconds);
  
  if(seconds === 10){
    clearInterval(timer);
  }
}

const timer = setInterval(showSeconds, 1000);

//Question 7

const items = document.querySelectorAll('.item');
items.addEventListener('click', openModal);


//Question 9

const button = document.querySelector('#button');
button.addEventListener('click', compareNumbers);

function compareNumbers(n1, n2){
  return n1 > n2;
}

