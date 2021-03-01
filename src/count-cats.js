const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  for (let i = 0; i < backyard.length; i++) {
    let arrays = backyard[i];
      for (let j = 0; j < arrays.length; j++) {
        if(arrays[j] === "^^") {
          count = count + 1;
        }
      }
    }
    return count;
};
