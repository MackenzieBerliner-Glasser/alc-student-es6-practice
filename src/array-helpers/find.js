const users = [
  { name: 'ben', admin: false },
  { name: 'jeff', admin: true },
  { name: 'laura', admin: true },
  { name: 'jean', admin: false }
];

//find is an iterator that finds the ***FIRST*** element that returns true
const user = users.find(user => user.name === 'laura');
console.log(user);

const admin = users.find(user => user.admin === true);
//do you think jeff or laura will be returned as admin?
console.log(admin);
/*
  Exercises:
    1. given an account array of objects that have user and balance properties find the balance of your choosing.
    2. ***CHALLENGE*** write a function findWhere() that takes an array as well as a criteria and returns the property searched

    EX: findWhere(array, { key: value })
*/


