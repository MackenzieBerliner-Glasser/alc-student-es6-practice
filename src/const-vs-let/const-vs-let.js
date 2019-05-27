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

