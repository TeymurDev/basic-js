const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(!(Array.isArray(members))) { 
    return false;
  }

  const ignoreOtherTypes = members.filter(item => typeof item === 'string');
  const capitalizedAndTrimmed = ignoreOtherTypes.map(item => item.toUpperCase().trim());
  const firstLetters = capitalizedAndTrimmed.map(([item])=> item);
  const sortedAndConcatenated = firstLetters.sort().join('');

  return sortedAndConcatenated;

};
