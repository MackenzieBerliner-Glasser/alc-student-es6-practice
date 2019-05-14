/*filter can be used for you guessed it filtering functionality.
It allows us to access indexes or properties
of indexes to filter out what we need.*/

/*iterator returns a falsy value it will not be included in the new array. Otherwise it will be included.*/

const pets = [
  { name: 'fluffy', type: 'cat', weight: 10, age: 100 },
  { name: 'bowser', type: 'turtle', weight: 200, age: 1 },
  { name: 'gerald', type: 'cat', weight: 14, age: 12 },
  { name: 'franklin', type: 'turtle', weight: 40, age: 100000 }
];

const turtles = pets.filter(pet => pet.type === 'turtle');
const cats = pets.filter(pet => pet.type === 'cat');

console.log('turtles', turtles);
console.log('kitties', cats);

// you can chain to do some extreme filtering!!
const xtremeFiltered = pets.filter(
  pet => pet.type === 'turtle' && pet.weight > 35 && pet.age > 100
);
console.log('xtreme!!', xtremeFiltered);
