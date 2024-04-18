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
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};




// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // two different strings
assertEqual("Hello", "Hello"); // two equal strings
assertEqual(1, 2); // two different strings
assertEqual(1, 1); // two equal numbers