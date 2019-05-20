// map doesnt mutate an array but returns a new array
// it is also an iterator that allows us to do a variety of things to arrays!

// double all numbers in an array;
const arr = [1, 2, 3, 4];
//const doubleArr = arr.map(num => num * 2);

const double = num => num * 2;
const doubleArr = arr.map(double);
console.log(doubleArr);

// return an array of a specific property of of an object.
const cars = [
  { model: 'nissan', make: 'sentra', price: 3000 },
  { model: 'mazda', make: 'cx3', price: 8000 },
  { model: 'toyota', make: 'carolla', price: 5000 }
];

const prices = cars.map(car => car.price);
console.log(prices);

/*
Exercises :
pluck functionality is very common
 to showcase this we are going to make a function pluck

 const pluck = (arr, prop) => {

 }

 that takes an array of objects and returns a new array of the property passed in.
*/
