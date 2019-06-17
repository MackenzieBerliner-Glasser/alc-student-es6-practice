//OBJECTS:

const cat = {
  title: 'Felix',
  type: 'Tabby',
  weight: 'Heavy',
  snacks: ['fishes', 'the catnips', 'meat treats']
};

// before ES6
// const type = cat.type;
// const title = cat.title;

// ES6

const { type, title } = cat;
console.log(type, title);

//destructure to eliminate duplication but still have to reference the obj.
// passing in cat object here, can destructure object in function params.
// when destructuring you can lessen the complexity of having to remember multiple arguments in a certain order.

const printCat = ({ type, name, weight, snacks }) => {
  const shmackos = snacks.join(' ');
  return `The ${type} cat named ${name} weighs ${weight} and likes to eat ${shmackos}`;
};

console.log(printCat(cat));

//ARRAYS:

const goodBoys = [
  { name: 'Marley', type: 'Golden' },
  { name: 'Hooch', type: 'Mastiff' },
  { name: 'Sourdough', type: 'Corgi' }
];

//before ES6

const marley = goodBoys[0];
console.log(marley);

//ES6
const [dog1, dog2, dog3] = goodBoys; // ref items in arrays as such.
const { length } = goodBoys; // can pull properties off of an array such as length.
// const { dog } = goodBoys; nope wont work.

console.log(dog1, dog2, dog3);
console.log(length);


//destructuring both OBJECTS and ARRAYS together!!

//lets say I want the name of the first dog in the goodboys array.

const [{ name }] = goodBoys;
console.log(name);


//lets say I want to access the first snack in the cat snacks property.

const { snacks: [snack] } = cat;
console.log(snack);

/*EXERCISE:

Given an array of cat arrays, write a function that returns an array of cat objects.

[
  ['James', 'Ragdoll', 'Bugs'],
  ['Timothy', 'British Shorthair', 'Cheese']
]

INTO:

[
  { name: 'James', type: 'Ragdoll', favSnack: 'Bugs' },
  { name: 'Timothy', type: 'British Shorthair', favSnack: 'Cheese' }
]

*HINT* use an array helper and destructuring.

*/

