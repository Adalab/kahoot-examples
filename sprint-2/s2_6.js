//Question 1, 2, 3, 4
const counter = {
  initialValue: 0,
  currentValue: 1,
  max:10,
  min: 0
}

//Question 5, 6
counter.increment = () => 
  counter.currentValue += 1;

//Question 7
counter.increment = () => {
  if(counter.currentValue < counter.max){
    counter.currentValue += 1;
  }
};

//Question 8, 9, 10
const person = {
  name: 'Julia',
  familyName: 'López',
  address: {
    city: 'Madrid',
    zip: 28005
  }
};