/**
 *
 *map() function takes in an array and a callback function returns a new array with new content
 *
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

//map function implementation
const map = function(arr, callbackF) {
  const results = [];

  //Apply a callback function to every item in the array
  for (let item of arr) {
    results.push(callbackF(item));
  }
  return results;
};

//TEST CASES

const words = ["ground", "control", "to", "major", "tom"];
const arrayOfArrays = [['hello', 'there'], ['Second', 'Array'], ['Interesting', 'bear']];
const numbers = [5,10,15];

const results1 = map(words, (word) => word[0]);
const results2 = map(arrayOfArrays, (innerArray) => innerArray[0]);
const results3 = map(numbers, (number) => number*2);


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); //PASS
assertArraysEqual(results2, ['hello','Second', 'Interesting']); //PASS
assertArraysEqual(results3, [10,20,30]);// PASS

module.exports = map;