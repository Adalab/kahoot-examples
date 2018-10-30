//Question 1, 2
function makeMeCoffee(coffeeName) {
  console.log(`He preparado un ${coffeeName} para usted`);
}

makeMeCoffee('cappuccino');

//Question 3
function makeMeCoffee(coffeeName) {
  console.log(`He preparado un ${coffeeName} para usted`);
}

//Question 4, 5
function sum(a, b) {
	return a + b;
}

const result = sum(4, 5);
console.log(`El resultado es ${result}`);

//Question 8, 9, 10
function sayHi(name){
  return `Bienvenida, ${name}`;
}

const welcome = sayHi('Lucía');
const paragraph = document.querySelector('.text');
paragraph.innerHTML = welcome;