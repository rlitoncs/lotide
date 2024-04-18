// FUNCTION IMPLEMENTATION
/**
 *
 * assertEqual function expects two arguments and returns a passed assertion or a failed assertion, depending on whether the two arguments strictly match
 *
 * assertEqual uses a ternary operator to decide whether the two arguments are strictly equal and outputs the assertion message
 *
 * Reminder: eslint assertEqual.js
 */

// ASSERT function
const assertEqual = function(actual, expected) {
  // If actual and expected values are equal, print success message. Otherwise, print failure message.
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// FUNCTION IMPLEMENTATION
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

// TEST CODE
/*
It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day. */
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3","4"]), false); // => should FAIL
assertEqual(eqArrays([], []), true); // should PASS