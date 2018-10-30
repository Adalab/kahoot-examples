//Question 1, 2, 3
const weekdays = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
];

console.log(`Hoy es ${weekdays[2]}`);

//Question 4, 5
const people = [
  {
    name: 'Ada Lovelace',
    job: 'programadora'
  },
  {
    name: 'Anita Borg',
    job: 'programadora'
  }
];

console.log(`Me llamo ${people[0].name} y soy ${people[0].job}`);

//Question 6
const names = ['Joanna', 'Alexandra', 'Lucy'];
const otherNames = names;

otherNames[0] = 'Christina';
console.log(`Me llamo ${names[0]}`);


//Question 7
const names = ['Joanna', 'Alexandra', 'Lucy'];
names[0] = 'Christina';

console.log(`Tengo ${names.length} nombres`);

//Question 8
const names = ['Joanna', 'Alexandra', 'Lucy'];

for(const name of names){
  console.log(`Me llamo ${name}`);
}

//Question 9
const marks = [5, 6, 8, 9];
let acc = 0;

for(let i=0; i<marks.length; i++){
  acc = acc + marks[i];
}

console.log(`La media es ${acc / marks.length}`);

//Question 10
const ps = document.querySelectorAll('p');
ps.addEventListener('click', () => console.log('YAY'));