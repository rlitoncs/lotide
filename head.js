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


const head = function(array) {
  let firstElement = array[0];
  // If length of array is 0, return undefined since there are no elements. Otherwise return the first element of the array.
  return array.length === 0 ? undefined : firstElement;
};


// TEST CODE
assertEqual(head([5, 6, 7]), 5); //testing with numbers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //testing with strings
assertEqual(head(["OneElement"]), "OneElement"); //testing with 1 element
assertEqual(head([]), undefined); //testing with no elements
//unsure how this would assert assertEqual(head([[]]), "object"); 