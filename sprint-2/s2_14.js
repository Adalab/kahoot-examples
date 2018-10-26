//Question 3
const deck = ['1c', '2c', '13c'];
deck.reverse();

const [card1, card2, card3] = deck;
console.log(card1.length);

//Question 10
const adalabTeam = ['María','Lucía','Susana','Rocío'];

const logger = (adalaber, ...friends) => {
  console.log(`Soy ${adalaber} y mis amigas son
   ${friends.join(' y ')}`);
};

logger(...adalabTeam);

