/**
 *
 * letterPositions(string) takes in a string and returns an object of all the indexes of where each letter occurs in the sentence
 *
 * @param {String} sentence
 * @returns {Object} - the indexes of where each letter occurs
 */

const letterPositions = function(sentence) {
  const results = {};

  // Check if the current character is not 'space character'
  // Check if current character is in the results object
  // If not, add the character to the object with the index as its value
  // If character exists in the object, push the current index
  
  for (let index = 0; index < sentence.length; index++) {
    // This uses the regular expression /[a-z]/i to check if char is a letter. The i at the end makes it case-insensitive, so it will match both lower-case and upper-case letters.
    ///a-z/i.test(sentence[index]) stopped working
    if (sentence[index].toLowerCase != sentence[index].toUpperCase) {
      if (results[sentence[index]]) {
        results[sentence[index]].push(index);
      } else {
        results[sentence[index]] = [index];
      }
    }
  }
  return results; 
};

module.exports = letterPositions;