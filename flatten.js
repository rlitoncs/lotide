/**
 *
 *
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

//FLATTEN Function Implemention

const flatten = function(arr) {
  let flattenArr = [];


  for (let i of arr) {
    if (!Array.isArray(i)) {
      flattenArr.push(i);
    } else {
      
      flattenArr = flattenArr.concat(i);
      
    }
  }

  return flattenArr;

};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);