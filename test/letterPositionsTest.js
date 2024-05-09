//Require modules
const assert = require('chai').assert;
const letterPositions = require("../letterPositions");

let result1 = letterPositions("hello"); //return an object
let result2 = letterPositions("lighthouse in the house");

//TEST CASES
describe("#letterPositions", () => {

  //testing letter h
  it("For letter 'h', returns index 0 for the word 'hello' ", () => {
    assert.deepEqual(result1["h"], [0]);
  })

  //testing letter i
  it("For letter 'i', returns index 1,11 for the word 'lighthouse in the house'", () => {
    assert.deepEqual(result2["i"], [1,11]);
  })

  //testing letter that does not exist
  it("For letter 'a', returns undefined for the word 'hello'", () => {
    assert.strictEqual(result2["a"], undefined);
  })

})
