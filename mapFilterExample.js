const users2 = require("./users2");
// console.log(users);

const newArray = users2
  .filter((user) => user.age > 60)
  .map((user) => user.name);
console.log(newArray);
