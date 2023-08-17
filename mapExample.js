const users = require("./users");
// console.log(users);

// Map method
//it return new array from previous array
// const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.map((item, index) => item * index);
// console.log(newArray);

//const newArray = users.map((user, index, array) => {
//   return { index: index, id: user.id, name: user.name, age: user.age };
// });

// console.log(newArray);

console.log(users.map((user) => user.address.city));
