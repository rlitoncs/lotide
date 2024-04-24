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
  for (let key in keys) {
    if (callbackF(object[key])) {
      return key;
    }
  }

  // Throws an undefined error if you use object.key instead object[key]. 
  // I believe it is because object.key is actually looking for a key named "key", and therefore throws undefined. Since we are assigning key as our variable to store each key from the object array, I guess object.key doesn't recognize it as the actual array key.

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



//Comments
/**
 *  // for (let key in object) {
  //   if (callbackF(object[key])) {
  //     return key;
  //   }
  // }

  // In your findKey function, you used a for...in loop to iterate over the object. While this works fine, it's generally recommended to use Object.keys() to get an array of the object's keys and then iterate over that array. This is because for...in will also iterate over an object's prototype properties, which can sometimes lead to unexpected results.

  Don't understand what object's prototype properties mean
 */