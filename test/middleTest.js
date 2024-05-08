const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle: return array of middle element", () => {

  //Make sure Original array was not altered
  it("make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = middle(words);
    assert.strictEqual(words.length, 3);
  });
  

  //For arrays with one or two elements, there is no middle. Return an empty array.
  it(`returns true: Middle of [] is [] `, () => {
    assert.deepEqual(middle([]), []);
  });

  it(`returns true: Middle of [1] is [] `, () => {
    assert.deepEqual(middle([1]), []);
  });

  it(`returns true: Middle of [1,2] is [] `, () => {
    assert.deepEqual(middle([1,2]), []);
  });

  //For arrays with odd number of elements, an array containing a single middle element should be returned.
  it(`returns true: Middle of [1,2,3,4,5] is [3] `, () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it(`returns true: Middle of [1,2,[],4,5] is [[]] `, () => {
    assert.deepEqual(middle([1,2,[],4,5]), [[]]);
  });

  //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  it(`returns true: Middle of [1,2,3,4] is [2,3] `, () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

});