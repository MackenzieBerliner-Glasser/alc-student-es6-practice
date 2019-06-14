const sum = (a, b) => a + b;

console.log(sum(1, 2, 3, 4, 5)); // result should be 3


/*

Before rest params was introduced there was the **arguments** keyword which returns an array like object;

The downside of using the arguments keyword is that, it returns an array-like object;
this means you essentially cannot perform any array-methods like; Array.filer, Array.map.
Another pitfall, is that we cannot use arguments in arrow functions.
This is because arrow-functions do not have their own this, and hence no arguments object either.

*/

function args() {
  return arguments;
}

console.log(args(1, 2, 3, 5));
/*

To account for this we can use the rest parameters functionality that ES6 gives us.
This allows us to handle n arguments by putting them into an array to do whatever we want!

*/

const add = (...args) => args.reduce((accum, curr) => accum += curr, 0);
console.log(add(1, 2, 3, 5, 6));


