/*filter can be used for you guessed it filtering functionality.
It allows us to access indexes or properties
of indexes to filter out what we need.*/

/*iterator returns a falsy value it will not be included in the new array.
Otherwise it will be included.*/

const pets = [
  { name: 'fluffy', type: 'cat', weight: 10, age: 100 },
  { name: 'bowser', type: 'turtle', weight: 200, age: 1 },
  { name: 'gerald', type: 'cat', weight: 14, age: 12 },
  { name: 'franklin', type: 'turtle', weight: 40, age: 100000 }
];

const turtles = pets.filter(pet => pet.type === 'turtle');
const cats = pets.filter(pet => pet.type === 'cat');

console.log('turtles', turtles);
console.log('kitties', cats);

// you can chain to do some extreme filtering!!
const xtremeFiltered = pets.filter(
  pet => pet.type === 'turtle' && pet.weight > 35 && pet.age > 100
);
console.log('xtreme!!', xtremeFiltered);

//practical blog example:

//single post objects
const post = { id: 4, title: 'IMPORTANT' };

//array of comments for all posts
const comments = [
  { postId: 4, content: 'this is stupid' },
  { postId: 3, content: 'i love beyonce' },
  { postId: 4, content: 'how dare you' },
  { postId: 2, content: 'ew' }
];

const commentsForPost = (post, comments) => {
  return comments.filter(comment => comment.postId === post.id);
};
//returns an array of objects only for a post where the post id matches.
console.log(commentsForPost(post, comments));

/*
Exercises:

  1. create an array of user objects with an id property and a admin property that is a boolean.
    -filter the array of users objects so you only return those who have admin access.

  2. **HARDER** create a function reject that takes an array and a function
    -reject should work the opposite of filter.
     If the function returns true the item should **NOT** be included in the array.

    EX:
    const numbers = [10, 20, 30];
    const lessThanFifteen = reject(numbers, fn(number) {
      return number > 15;
    });
    lessThanFifteen // [ 10 ];
*/
