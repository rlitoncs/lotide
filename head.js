// FUNCTION IMPLEMENTATION
/**
 *
 * assertEqual function expects two arguments and returns a passed assertion or a failed assertion, depending on whether the two arguments strictly match
 *
 * assertEqual uses a ternary operator to decide whether the two arguments are strictly equal and outputs the assertion message
 *
 * Reminder: eslint assertEqual.js
 */

const head = function(array) {
  // If length of array is 0, return undefined since there are no elements. Otherwise return the first element of the array.
  return array.length === 0 ? undefined : array[0];
};

module.exports = head;
