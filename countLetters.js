/**
 *
 * countLetters () takes in a string, and counts the number of occurences of each letter in the string
 * Returns a object back with the occurences of each letter in the string
 *
 */

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

module.exports = countLetters;