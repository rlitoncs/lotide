const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


//TEST CASES
//For arrays with one or two elements, there is no middle. Return an empty array.
assertArraysEqual(middle([]), []); // => []
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

//For arrays with odd number of elements, an array containing a single middle element should be returned.
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, [], 4, 5]), [[]]); // => [] unsure about this one, it keeps returning failed?

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]); // => [2, 3]