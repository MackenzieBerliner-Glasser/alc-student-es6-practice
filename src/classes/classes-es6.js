// lets refactor to use some ES6
//NOTE: We will be using some other syntactic sugar from elsewhere.


class House {
  //somewhat of a create or init.
  //is a method that will be ran whenever we use the **new** keyword.
  constructor(props) {
    this.location = props.location;
  }

  sell() {
    return 'sold for a half penny';
  }
}

class MyHouse extends House {
  constructor(props) {

    /*
    MyHouse is extending the House class so it should behave like the House as well.
    Both MyHouse and House have defined constructor methods.
    We want to make sure that we call the House's constructor method so we get any initialization.
    MyHouse being a subclass to its parent House uses the super keyword.

    */
    super(props); // think of this as House.constructor() it also needs the props object to pass it along to the parent.
    this.price = props.price;
  }

  clean() {
    return 'nice and sparkly';
  }
}

const myHouse = new MyHouse({ location: '123 this place is lowkey', price: 100000000 });
console.log(myHouse);
console.log(myHouse.clean());
console.log(myHouse.sell());




