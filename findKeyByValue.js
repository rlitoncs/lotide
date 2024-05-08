/**
 *
 * findKeyByValue takes in an object, and a target value, and returns the key that matches the target value
 *
 */


const assertEqual = function(actual, expected) {
  // If actual and expected values are equal, print success message. Otherwise, print failure message.
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value) {

  //For..in loop finds all the keys
  for (let key in object) {
    if (object [key] === value) {
      return key;
    }
  }

  //return the first key that is matched with given value
  //If no key with given value is found, return undefined
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByValue;