// FUNCTION IMPLEMENTATION
/**
 *
 * eqArrays() takes in 2 arrays and checks that the elements of both arrays are identical in value and position
 *
 */
// EQUAL ARRAYS function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  //This does the same thing as a for loop, but in a more concise way.
  return arr1.every((val, index) => val === arr2[index]);

};

module.exports = eqArrays;


// Old solution:
/*
for (let num = 0; num < arr1.length; num++) {
  if (arr1[num] !== arr2[num]) {
    return false;
  }
}
*/