// FUNCTION IMPLEMENTATION
/**
 *
 * eqArrays() takes in 2 arrays and checks that the elements of both arrays are identical in value and position
 *
 */
// EQUAL ARRAYS function
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

module.exports = eqArrays;