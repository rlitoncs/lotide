// FUNCTION IMPLEMENTATION
/**
 *
 * eqArrays() function expects two arguments and returns true upon the 2 arrays matching, or returns false if invalid
 *
 * assertArraysEqual() takes 2 arrays and makes use of the eqArrays() function to check whether the 2 arrays are matching.
 *
 * Uses a ternary operator to decide whether 2 arrays returned are the same (true) outputs the assertion message
 *
 */

//Require eqArrays module
const eqArrays = require("./eqArrays");

//ASSERT EQUAL ARRAYS
const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1,arr2) ? `✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]` : `🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
};

module.exports = assertArraysEqual;