/**
 * Objective: Flatten() will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
 *
 * eqArrays() checks to see if 2 arrays are equally matched and returns true if it is
 *
 * assertArraysEqual() reinforces that 2 arrays are in fact the same
 *
 *
 * flatten() removes all nested arrays inside and returns a flattened version of the array
 */


// EQUAL ARRAYS Function
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

//ASSERT EQUAL ARRAYS
const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1,arr2) ? `✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]` : `🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
};

//FLATTEN Function Implemention
// Flatten iterates through the source array and pushes all elements that are not arrays into our new flatten Array. If it comes across an array as an element, it will concatenate that array to our flatten Array.
const flatten = function(sourceArr) {
  let flattenArr = [];


  for (let i of sourceArr) {
    if (!Array.isArray(i)) {
      flattenArr.push(i);
    } else {
      
      flattenArr = flattenArr.concat(i);

    }
  }

  return flattenArr;

};

//TEST CASE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);

module.exports = flatten;