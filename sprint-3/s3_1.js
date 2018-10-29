//Question 3
const score = [4, 2, 7, 8, 9];

const calcSum = (acc, number) => acc + number;

const result = scores.reduce(calcSum, 0);
                            //este ---^

//Question 4
const coinValues = [1, 50, 20, 100, 5, 200];
const minCoinValue = 50;

const filter$ = coin => coin >= minCoinValue;

const savedCoins = coinValues.filter(filter$);

//Question 5
const users = [
  {name: 'Susana', answer: 'red'},
  {name: 'Rocío', answer: 'green'},
  {name: 'Inmaculada', answer: 'blue'},
];

const hasSucceed = 
  user => user.answer === 'green';

const winners = users.filter(hasSucceed);

//Question 6
const followers = ['Ada', 'untuerto', 'pepe'];

const printMessage = (acc, name) => {
  const lastName = followers[followers.length -1];
  if(name !== lastName){
    return acc + name + ', ';
  }else{
    return acc + name + ' y otros te siguen...';
  }
}

const message = followers.reduce(printMessage, '');

//Question 7
const values = ['23', '43', '23', '2324'];

const parse = number => parseInt(number);

const result = values._______(parse);

//Question 8
const values = ['23', '43', '23', '2324'];

const add = (total, number) => 
  total + parseInt(number);

const result = values._______(add, 0);

//Question 9
const values = ['23', '43', '23', '2324'];

const parse = number => parseInt(number);

const add = (total, number) => 
  total + number;

const result = values
  .map(parse)
  .reduce(add, 0);
