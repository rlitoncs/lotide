/**
 * findKey() function takes in an object and callback Function and returns a key
 */

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

module.exports = findKey;