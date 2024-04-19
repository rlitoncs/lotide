// FUNCTION IMPLEMENTATION
/**
 *
 * eqArrays() function expects two arguments and returns true upon the 2 arrays matching, or returns false if invalid
 *
 * assertArraysEqual() takes 2 arrays and makes use of the eqArrays() function to check whether the 2 arrays are matching.
 * Uses a ternary operator to decide whether 2 arrays returned are the same (true) outputs the assertion message
 *
 * Reminder: eslint assertEqual.js
 */

// EQUAL ARRAYS Function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let num = 0; num < arr1.length; num++) {
    if (arr1[num] !== arr2[num]) {
      return false;
    }
  }

  return true;

};

//ASSERT EQUAL ARRAYS
const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1,arr2) ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([], []);