const users2 = require("./users2");
// console.log(users);

const sortedArray = users2.sort((userA, userB) => {
  //   return userA.age - userB.age;//Ascending order
  return userB.age - userA.age; //descending order
});

console.log(sortedArray);
