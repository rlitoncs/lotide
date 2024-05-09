//Require Modules
const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

// TEST CODE
/*
It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical. We will save this "deeper" problem for another day. */
describe("#eqArrays", () => {

  //comparing identical arrays
  it("returns true when comparing arrays [1,2,3] and [1,2,3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  //comparing different arrays
  it("returns false when comparing arrays [1,2,3] and [3,2,1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  //comparing identical arrays
  it("returns true when comparing arrays ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  //comparing different arrays
  it("returns false when comparing arrays ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  //comparing different arrays
  it("returns false when comparing arrays ['1', '2', '3',] and ['1', '2', '3', '4']'", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
  });

  //comparing identical arrays
  it("returns true when comparing arrays [] and []'", () => {
    assert.strictEqual(eqArrays([], []), true);
  });
});