const people = [
  {
    username: 'jimmy',
    age: 12
  },
  {
    username: 'james',
    age: 32
  },
  {
    username: 'joanna',
    age: 15
  },
  {
    username: 'janice',
    age: 60
  }
];

/*some array helper iterates and returns true if some elements meets the condition.
False if none do.

ie. the example below iterates and compares to the condition

true || false || true || false = true for the trueReturn

false || false || false || false = false for falseReturn

*/

const trueReturn = people.some(person => person.age <= 15);
const falseReturn = people.some(person => person.name === 'Jon');

console.log(trueReturn, falseReturn);

