const users2 = require("./users2");
// console.log(users);

const sortedArray = users2.map((user) => user.name).sort();

console.log(sortedArray);
