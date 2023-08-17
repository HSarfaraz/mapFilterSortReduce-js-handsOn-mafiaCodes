const users2 = require("./users2");
// console.log(users);

//reduce return the single value
//find the sum of ages in array

//for reduce, starting value is 0
const ageSum = users2.reduce((previousValue, user, index, array) => {
  console.log("Previous Value:", previousValue);
  return previousValue + user.age;
}, 100);

console.log("Age Sum:", ageSum);
console.log("Average:", ageSum / users2.length);
