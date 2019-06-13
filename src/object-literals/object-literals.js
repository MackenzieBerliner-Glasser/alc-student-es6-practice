/*
  Create a function that returns an object literal for a grocery store.
*/

const createGroceryStore = inventory => {
  return {
    inventory: inventory,
    getInventoryValue: function() {
      return this.inventory.reduce((total, item) => total + item.price, 0);
    },
    getPriceForItem: function(product) {
      return this.inventory.find(item => item.product === product).price;
    }
  };
};

const productInventory = [
  { product: 'Lettuce', price: 3 },
  { product: 'Strawberries', price: 2 }
];

const groceryStore = createGroceryStore(productInventory);

console.log(groceryStore.inventory);
console.log(groceryStore.getInventoryValue());
console.log(groceryStore.getPriceForItem('Lettuce'));

// with ES6 we can tidy up a few things

//EX:

const createToyStore = inventory => {
  return {
    inventory,
    getInventoryValue() {
      return this.inventory.reduce((total, item) => total + item.price, 0);
    },
    getPriceForItem(product) {
      return this.inventory.find(item => item.product === product).price;
    }
  };
};

const toyInventory = [
  { product: 'Buzz Lightyear', price: 30 },
  { product: 'Mr. Potato Head', price: 25 }
];

const toyStore = createToyStore(toyInventory);

console.log(toyStore.inventory);
console.log(toyStore.getInventoryValue());
console.log(toyStore.getPriceForItem('Buzz Lightyear'));

/*
So what did we change?

- object properties that are identical inventory: inventory can be shorted to just inventory.
- properties that are functions or methods no longer need the function keyword.

ES5
getInventoryValue : function() {

}
=================================
ES6

getInventoryValue() {

}

Slightly cleaner syntax but the functionality of our object literal does not change.

*/
