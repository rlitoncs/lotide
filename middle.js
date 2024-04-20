/**
 * Objective: middle() function will take in an array and return the middle-most element(s) of the given array.
 *
 * eqArrays() checks to see if 2 arrays are equally matched and returns true if it is
 *
 * assertArraysEqual() reinforces that 2 arrays are in fact the same
 *
 *
 * middle() takes in an array and returns an array of the middle element
 *
 *
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

// MIDDLE Function Implementation
// toSpliced() is a method that only works on newer version of node. toSpliced() does not alter the original array since it makes a new copy of it.
// splice() method alters the original contents of the array

// to go around this we use the .slice() method since it returns a copy of an array

const middle = function(sourceArr) {
  const sourceArrCopy = sourceArr.slice(); //returns a copy of sourceArr so original contents are not modified

  //Case 1: no elements
  if (sourceArrCopy.length === 0) {
    return sourceArrCopy;
  }

  //Case 2: 1 or 2 elements
  if (sourceArrCopy.length === 1 || sourceArrCopy.length === 2) {
    return [];
  }

  // Case 3: More than 2 elements
  // a) remove 1 element if sourceArr length is odd
  if (sourceArrCopy.length % 2 === 1) {
    console.log([sourceArrCopy[(sourceArrCopy.length - 1) / 2]]);
    return [sourceArrCopy[(sourceArrCopy.length - 1) / 2]]; // wrap the result in another array so it returns an array with the middle elem
  }
  
  // b) remove 2 elements if sourceArr length is even
  if (sourceArrCopy.length % 2 === 0) {
    return [sourceArrCopy[(sourceArrCopy.length / 2) - 1], sourceArrCopy[sourceArrCopy.length / 2]]; // wrap the result in another array so it returns an array with the middle elements
  }

};


//TEST CASES
//For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([]), []); // => []
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

//For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, [], 4, 5]), [[]]); // => [] unsure about this one, returns failed

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]