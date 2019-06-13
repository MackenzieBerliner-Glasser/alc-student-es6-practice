//basic syntax

// function double(number) {
//   return number * 2;
// }

// fat arrow functions get rid of the function keyword and replaces it with an arrow.
const double = number => {
  return 2 * number;
};
double(8); //16

/*
Other syntactic sugar:

- if an arrow function only takes one parameter there is no need for parenthesis.
- you can omit the curly braces when there is a single expression.

*/

const plusTwo = number => number + 2;
plusTwo(5);

// to pass multiple parameters you need parenthesis

const sum = (a, b) => a + b;
sum(3, 5);

//multiple expressions for example an array method **don't forget brackets**.

const doubleArr = arr => {
  const newArr = arr.map(i => i * 2);
  return newArr;
};
doubleArr([1, 2, 3, 5]);

/*
Context and 'this':

In classic function expressions, the this keyword is bound to different values based on the context in which the function is called.
Whereas arrow functions use the value of this in their lexical scope.
This leads to very different behaviour.

What’s the difference between context and scope?
The context is (roughly) the object that calls the function.
And the scope is all the variables visible to a function where it is defined.
One cares about how it is called, the other cares about how it is defined.

*/

let obj = {
  myVar: 'foo',
  myFunc: function() {
    console.log(this.myVar);
  }
};
obj.myFunc(); // foo

/*
obj is the object calling myFunc. It’s myFunc's context.
So the value of this in myFunc is bound to obj.
*/

let obj2 = {
  myVar: 'foo',

  myFunc: function() {
    console.log(this.myVar);

    setTimeout(function() {
      console.log(this.myVar);
    }, 1000);
  }
};
obj2.myFunc(); // foo ... then... undefined

/*
Recall we said that arrow functions take their value of this from the lexical scope.
That means it just uses the value of this in the surrounding code block.
It doesn’t care what calls it, it just cares where it was defined.
*/

let obj3 = {
  myVar: 'foo',

  myFunc: function() {
    console.log(this.myVar);

    setTimeout(() => {
      console.log(this.myVar);
    }, 1000);
  }
};
obj3.myFunc(); // foo ... then... foo

//Given what you learned:
//What do you think will be the result of this object method?

let obj4 = {
  myVar: 'foo',

  myFunc: () => {
    console.log(this.myVar);
  }
};
obj4.myFunc();
