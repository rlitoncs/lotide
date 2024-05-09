//Require Modules
const assert = require("chai").assert;
const without = require("../without");

const words = ["hello", "world", "lighthouse"];

// TEST CASES
describe("#without", () => {

  it("make should original array is not modified", () => {
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

  it("given array: [1,2,3] and itemsToRemove [1], should return [2,3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2,3]);
  });

  it("given array: ['1', '2', '3'] and itemsToRemove [1,2,'3'] should return ['1','2']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  //Nothing to remove
  it("given array: ['1', '2', '3'] and itemsToRemove [4,5,6] should return ['1', '2', '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [4,5,6]), ["1", "2", "3"]);
  });

  it("given array: [] and itemsToRemove [] should return []", () => {
    assert.deepEqual(without([], []), []);
  });

});