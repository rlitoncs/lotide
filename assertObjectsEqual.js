/**
 *
 * assertObjectsEqual() function takes in 2 objects checks to see if the objects are equal. If it is, the objects are outputted along with an assertion message displaying a if it passed or failed
 *
 *
 */
const eqObjects = require("./eqObjects");

// ASSERT OBJECTS EQUAL function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  console.log(eqObjects(actual,expected) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;