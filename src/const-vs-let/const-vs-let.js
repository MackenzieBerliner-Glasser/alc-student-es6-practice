/* eslint-disable */

// with var before ES6

var name = 'mack';
var title = 'software engineer';
var salary = 0;

/*
   var declarations are globally scoped or function/locally scoped.
   It is globally scoped when a var variable is declared outside a function.
   This means that any variable that is declared with var outside a function block is available for use in the whole window.
   var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

*/
var name = 'mack'
function namer() {
  var newName = 'daniel'
}
console.log(newName) // undefined

/*
   var variables can be re-declared and updated
  That means that we can do this within the same scope and won't get an error.

*/
var name = 'mack';
var name = 'daniel';
console.log(name) // daniel



// now with ES6 we can be more specific about how we declare variables.

// Big difference between var and let is that let is block scoped while var is function scoped.

function names(names) {
  var newNames = [];
  for(var i = 0; i < names.length; i++) {
    const name = names[i];
    newNames.push(`my name is ${name}`);
  }
  console.log(i); //0, 1, 2;
  console.log(newNames); //new array of names;
  return newNames;
}

names(['James', 'Brad', 'Jenny']);

function names(names) {
  let newNames = [];
  for(let i = 0; i < names.length; i++) {
    const name = names[i];
    newNames.push(`my name is ${name}`);
  }
  console.log(i); //undefined
  console.log(newNames);
  return newNames;
}

names(['James', 'Brad', 'Jenny']);

//const is very similar to let, however, the big difference is when you assign a value to a variable using const you cannot reassign it to a new value;

let username = 'Tyler'
const email = 'tylermcginnis@gmail.com'

name = 'Tyler McGinnis' //
handle = 'tylermcginnis12@gmail.com' // TypeError: Assignment to constant variable.


//objects

const obj = {
  name: 'tyler'
};

obj.name = 'jared'; //all good

obj = {}; // nope


/* additional info
var:
  function scoped
  undefined when accessing a variable before it's declared

let:
  block scoped
  ReferenceError when accessing a variable before it's declared

const:
  block scoped
  ReferenceError when accessing a variable before it's declared
  can't be reassigned
*/
