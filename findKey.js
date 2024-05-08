/**
 * findKey() function takes in an object and callback Function and returns a key
 */


const assertEqual = function(actual, expected) {
  // If actual and expected values are equal, print success message. Otherwise, print failure message.
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const findKey = function(object, callbackF) {
  const keys = Object.keys(object);

  // Get the keys in the object
  // Apply the callback function on each object[key]
  // if callBack returns true, return the key
  for (let key of keys) {
    if (callbackF(object[key])) {
      return key;
    }
  }

};

const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

assertEqual(result, "noma"); //PASS

module.exports = findKey;