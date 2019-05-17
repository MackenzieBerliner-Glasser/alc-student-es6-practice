const users = [
  { name: 'ben' },
  { name: 'jeff' },
  { name: 'laura' },
  { name: 'jean' }
];

const user = users.find(user => user.name === 'laura');
console.log(user);

