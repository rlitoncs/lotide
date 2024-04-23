/**
 *
 * countLetters () takes in a string, and counts the number of occurences of each letter in the string
 * Returns a object back with the occurences of each letter in the string
 *
 */



const assertEqual = function(actual, expected) {
  // If actual and expected values are equal, print success message. Otherwise, print failure message.
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const countLetters = function(string) {
  const letterOccurences = {};

  // Check if the current character is not 'space character'
  // Check if the current character is in letterOccurences object
  // If not, add the item to the object with a value of 1
  // If the item is found, increment the value by 1

  for (let char of string) {
    // This uses the regular expression /[a-z]/i to check if char is a letter. The i at the end makes it case-insensitive, so it will match both lower-case and upper-case letters.
    if (/[a-z]/i.test(char)) {
      if (letterOccurences[char]) {
        letterOccurences[char] += 1;
      } else {
        letterOccurences[char] = 1;
      }
    }
  }
  //console.log(letterOccurences); // Debugging purposes
  return letterOccurences;
};

let result = countLetters("lighthouse in the house"); //return object

assertEqual(result["l"], 1); // Evaluate to True 1 === 1
assertEqual(result["h"], 4); // Evalute to True 4 === 4
assertEqual(result["e"], 3); // Evalute to True 3 === 3