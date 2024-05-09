/**
 * findKey(object, callbackF) takes in an object and a callback function and returns the key that is true according to the callback function
 * 
 * @param {Object} object - the object we want to apply our callback function too
 * @param {Object} callbackF - the callback function we will invoke on our object
 * @returns {String} - the key that was found
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