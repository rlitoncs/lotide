//Require Modules
const assert = require('chai').assert;
const tail = require("../tail");


describe("#tail: return array without first element", () => {
  it(`returns true: Tail of ["Hello", "Lighthouse", "Labs"] is ["Lighthouse", "Labs"] `, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })

  //Test Case: Array with one element
  it(`returns true: Tail of [1] is [] `, () => {
    assert.deepEqual(tail([1]), []);
  })

  //Test Case: Empty Array
  it(`returns true: Tail of [] is [] `, () => {
    assert.deepEqual(tail([]), []);
  })

})