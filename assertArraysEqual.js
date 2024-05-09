/**
 *
 * eqArrays(arr1, arr2) takes in 2 arrays and checks that the elements of both arrays are identical in value and position. Returns true if both arrays are identical, otherwise false
 *
 * assertArraysEqual(arr1, arr2) takes in 2 arrays and checks whether the 2 arrays are matching. If it is, the arrays are outputted along with an assertion message displaying a if it has passed or failed 
 *
 * @param {Array} arr1  
 * @param {Array} arr2
 * @returns {string} - an assertion message displaying whether both arrays have passed or failed
 */

//Require eqArrays module
const eqArrays = require("./eqArrays");

//ASSERT EQUAL ARRAYS
const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1,arr2) ? `✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]` : `🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
};

module.exports = assertArraysEqual;