// to show us the pain of what classes and inheritance looked like in JS before.

function House(props) {
  this.location = props.location;
}

// now I want to add a method to this constructor object.
House.prototype.sell = function() {
  return 'sold for a half penny';
};


const house = new House({ location: '1234 I dont care anymore' });
console.log(house);
console.log(house.sell());

// nasty prototypical inheritance...
function MyHouse(props) {
  House.call(this, props);
  this.price = props.price;
}

MyHouse.prototype = Object.create(House.prototype);
MyHouse.prototype.constructor = MyHouse;

MyHouse.prototype.clean = function() {
  return 'nice and sparkly';
};

const myHouse = new MyHouse({ price: 10000000, location: '123 this place is lowkey' });

console.log(myHouse);
console.log(myHouse.clean());
console.log(myHouse.sell());
