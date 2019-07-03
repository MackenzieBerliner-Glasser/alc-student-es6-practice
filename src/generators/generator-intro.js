// generators are a function that can be entered and exited whenever.

//use the function key word but adds some additional syntax to it.
//uses the star to let you know it is a generator function.


function* buyFood() {
  const someFood = yield '50 buckaroos';
  return someFood;
}

const generator = buyFood();

console.log(generator.next()); // this will walk through the function and return an object with the value and a done boolean status.
console.log(generator.next('snackos')); //this will change value from buckaroos to snackos and a done boolean status.

// so the buyFood function is called, it allows us to exit the function at the yeild keyword with a value of buckaroos.
//we call next again, then we re-enter the function at the yeild statement and now it returns us the value of snackos.
