/**
 *
 * assertObjectsEqual(actual, expected) takes in 2 objects and checks to see if the objects are equal. If it is, the objects are outputted along with an assertion message displaying a if it passed or failed
 *
 * @param {Object} actual - is the actual value we got back
 * @param {Object} expected - is the the value we expect to get back
 * @returns {string} - an assertion message displaying whether both arrays have passed or failed
 */

//Require eqObjects module
const eqObjects = require("./eqObjects");

// ASSERT OBJECTS EQUAL
const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  console.log(eqObjects(actual,expected) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;