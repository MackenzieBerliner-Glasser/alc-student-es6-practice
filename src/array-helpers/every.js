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

/*every array helper iterates and returns true if every element meets the condition.
False of one or more elements do not.*/

const trueReturn = people.every(person => person.age > 10);
const falseReturn = people.every(person => person.name === 'jimmy');

console.log(trueReturn, falseReturn);
