/**
 *
 * assertEqual(actual, expected) expects two arguments and returns a passed assertion or a failed assertion, depending on whether the two arguments strictly match
 *
 * @param {string | number} actual - is the actual value we got back
 * @param {string | number} expected - is the the value we expect to get back
 * @returns {string} - an assertion message displaying whether both arrays have passed or failed
 */

const assertEqual = function(actual, expected) {
  // If actual and expected values are equal, print success message. Otherwise, print failure message.
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


module.exports = assertEqual;