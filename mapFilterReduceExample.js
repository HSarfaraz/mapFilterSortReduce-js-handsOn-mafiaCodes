const users2 = require("./users2");
// console.log(users);

//filter the verified user --> get the age --> with sorted age

const mArray = users2
  .filter((user) => user.verified)
  .map((user) => user.age)
  .sort()
  .reduce((preVal, currentVal) => {
    return preVal + currentVal;
  }, 0);

console.log(mArray);
