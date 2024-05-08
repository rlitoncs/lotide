const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  // testing with strings
  it(`returns 'Hello' for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  //testing with 1 element
  it(`returns 'OneElement' for ["OneElement"]`, () => {
    assert.strictEqual(head(["OneElement"]), "OneElement");
  })

  //testing with no elements
  it(`returns 'undefined' for []`, () => {
    assert.strictEqual(head([]), undefined);
  }) 

  //testing if first element is an array itself
  it(`testing if first element is an array itself, returns true for [[]] `, () => {
    assert.strictEqual(Array.isArray(head([[]])), true);
  }) 

});