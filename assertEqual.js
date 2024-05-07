// FUNCTION IMPLEMENTATION
/**
 *
 * assertEqual function expects two arguments and returns a passed assertion or a failed assertion, depending on whether the two arguments strictly match
 *
 * assertEqual uses a ternary operator to decide whether the two arguments are strictly equal and outputs the assertion message
 *
 * Reminder: eslint assertEqual.js
 */

const assertEqual = function(actual, expected) {
  // If actual and expected values are equal, print success message. Otherwise, print failure message.
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


module.exports = assertEqual;