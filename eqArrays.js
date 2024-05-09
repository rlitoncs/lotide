/**
 *
 * eqArrays(arr1, arr2) takes in 2 arrays and checks that the elements of both arrays are identical in value and position. Returns true if both arrays are identical, otherwise false
 *
 * @param {Array} arr1 - the first array we want to compare
 * @param {Array} arr2 - the second array we want to compare
 * @returns {Boolean} - returns a true or false if arrays are equal or not
 */

// EQUAL ARRAYS Function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  //This does the same thing as a for loop, but in a more concise way.
  return arr1.every((val, index) => val === arr2[index]);

};

module.exports = eqArrays;