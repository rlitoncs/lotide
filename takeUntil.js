/**
 *
 * takeUntil() function takes in an array and callback Function and returns a new Array with new content
 */

//ASSERT EQUAL ARRAYS
const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1,arr2) ? `✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]` : `🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
};

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

//takeUntil function implementation
const takeUntil = function(arr, callbackF) {
  const result = [];

  // Apply callback function to each item in the array
  // Once callback function returns true, stop looping
  // Otherwise add item to result array
  for (let item of arr) {
    if (callbackF(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
  return result;

};

//TEST CASES

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results1, [1,2,5,7,2]); //PASS
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); //PASS