//example of the forEach helper
//when you call forEach on an array you call an iterator on each element.

const colors = ['blue', 'green', 'red', 'yellow'];
colors.forEach(color => console.log(color));

let sum = 0;
const numbers = [1, 3, 5, 6, 8];

//lets us add these numbers as we increment.
// numbers.forEach(num => sum += num);

//another way we can abstract this is by using a function and passing it into forEach;
const addNums = num => (sum += num);
numbers.forEach(addNums);
console.log('sum', sum);

//practice:
//create a function that loops over an array of names and adds a greeting to the beginning of each name using a forEach.
//loop over an array of shape objects that have width and height properties. Store their areas in a separate array.

/*
const images = [
  { width: 20, height: 20 },
  { width: 46, height: 80}
];
*/


