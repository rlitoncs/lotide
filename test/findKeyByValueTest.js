//Require Modules
const assert = require("chai").assert
const { expect } = require("chai");
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

//TEST CASES
describe("#findKeyByValue", () => {

  //Using a value that exists in object
  it("should return the key 'drama' from bestTVShowsByGenre object", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  })

  //Using value that does not exist in object
  it("should return undefined from bestTVShowsByGenre object", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  })

  //Passing an object that does not exist 
  it("should return undefined since object does not exist", () => {
    
    const badFn = () => findKeyByValue(myObj, "The Wire") ;
    expect(badFn).to.throw(ReferenceError);;

  })
})