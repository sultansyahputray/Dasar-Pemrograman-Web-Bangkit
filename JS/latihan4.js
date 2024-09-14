const user = {
  name: 'Dicoding',
  'last name': 'Indonesia',
  age: 9,
};

console.log(user.name);
console.log(user["last name"]);
console.log(user.age);

const users = {
  id: 24,
  email: 'aras@dicoding.com',
  name: 'Arsy',
  nickname: 'Aras',
  username: 'aras123',
  password: 'secret',
};

// using object destructuring
const { id, email } = users;
console.log(id, email);

// without object destructuting
const ids = users.id;
const emails = users.email;
console.log(ids, emails);

const account = {
  balance : 10000,
  debt : 10,
};

account.balance = 15000;
console.log(account.balance);