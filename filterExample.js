const users2 = require("./users2");
// console.log(users);

//filter may give small length or exact length of original array
const newArray = users2.filter((user) => {
  //   return only item, where, user item is equal to true
  //   return user.verified === false;
  //   return user.age > 60;
  //   return user.age > 60 && user.age < 85;
  return !user.address.includes("Floor");
});

console.log("newArray", newArray);
