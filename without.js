
/**
 * Objective: without(source, itemsToRemove) function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
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


//WITHOUT FUNCTION IMPLEMENTATION
const without = function(sourceArr, itemsToRemove) {
  const withoutArray = [];

  //Iterates over the sourceArr and looks for items that are not being removed and adds it to the new array
  for (let i of sourceArr) {
    if (!itemsToRemove.includes(i)) {
      withoutArray.push(i);
    }
  }

  return withoutArray;

};



// TEST CASES
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without(["1", "2", "3"], [4,5,6]), ["1", "2", "3"]); // => [ '1', '2', '3' ] nothing to remove
assertArraysEqual(without([],[]), []); // => []




const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case

assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Make sure the original array was not altered by the without function
