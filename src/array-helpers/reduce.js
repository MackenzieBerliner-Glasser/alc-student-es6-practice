const numArr = [1, 2, 3, 4, 5];

const sum = arr => arr.reduce((accum, curr) => accum + curr, 0);
console.log(sum(numArr));

/*
  write a function that checks if you have balanced parens.
  `()((()))` true
  `)()(` false *edge case*
  `((((()))))` true
  `))))` false
*/

const balancedParens = string => {
  return !string.split('').reduce((prev, char) => {
    if(prev < 0) return prev;
    if(char === '(') return prev ++;
    if(char === ')') return prev --;
    return prev;
  }, 0);
};
console.log(balancedParens('()()()'));


/*
  given an array of objects

  const desks = [
    { type: 'sitting},
    { type: 'standing}
  ];

  use reduce in a function deskTypes that returns an object that tracks the count of desk types

  EX: { sitting: 1, standing: 1};

*/

/*
  write a function unique that takes an array of numbers and returns the unique values.

  EX: given [1, 1, 2, 3, 4, 4, 1]  -->> [1, 2, 3, 4];
  
*/
