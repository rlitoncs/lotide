// FUNCTION IMPLEMENTATION
/**
 *
 * head(arr) takes in an array and returns the first element of the array
 * 
 * @param {Array} array 
 * @returns {*} - the first element of the array
 */

const head = function(array) {
  // If length of array is 0, return undefined since there are no elements. Otherwise return the first element of the array.
  return array.length === 0 ? undefined : array[0];
};

module.exports = head;
