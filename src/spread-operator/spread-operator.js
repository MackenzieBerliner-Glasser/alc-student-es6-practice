// rest param is used to group together.
//The spread operator is often used to flatten or spread stuff out.
// ** NOTE: this section builds off of rest params so I would go check that out first.
//EX:

const toys = ['Dog Toy', 'Action Figure', 'Slinky'];
const favToys = ['Woody', 'Buzz Lightyear', 'Mr Potato Head'];

const concat = toys.concat(favToys);
const spread = [...toys, ...favToys];

console.log(concat, spread);// the same.

//advantage of spread is that we can add new elements while spreading.

const newSpread = [...toys, ...favToys, 'Army Man'];
console.log(newSpread);// should have the new item to the end of the array.


//put rest-params and spread together

const toyShop = (...args) => {
  return args.indexOf('Army Man') < 0 ? ['Army Man', ...args] : args;
};

console.log(toyShop('Woody', 'Buzz Lightyear', 'Mr Potato Head'));


