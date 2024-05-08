/**
 *
 * letterPositions() takes in a string and returns an object of all the indexes of where each letter occurs in the sentence
 *
 *
 */


//ASSERT EQUAL
const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1,arr2) ? `✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]` : `🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
};

// EQUAL ARRAYS
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


const letterPositions = function(sentence) {
  const results = {};

  // Check if the current character is not 'space character'
  // Check if current character is in the results object
  // If not, add the character to the object with the index as its value
  // If character exists in the object, push the current index
  
  for (let index = 0; index < sentence.length; index++) {
    // This uses the regular expression /[a-z]/i to check if char is a letter. The i at the end makes it case-insensitive, so it will match both lower-case and upper-case letters.
    if (/a-z/i.test(sentence[index])) {
      if (results[sentence[index]]) {
        results[sentence[index]].push(index);
      } else {
        results[sentence[index]] = [index];
      }
    }
  }
  // console.log(results); //Debugging purposes

  return results; //return all indices where each character is found
};

let result1 = letterPositions("hello"); //return an object
let result2 = letterPositions("lighthouse in the house");

assertArraysEqual(result1['h'], [0]); // PASS
assertArraysEqual(result2['i'], [1, 11]); // PASS

module.exports = letterPositions;