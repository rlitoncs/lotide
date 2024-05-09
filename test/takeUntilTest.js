//Require modules
const assert = require("chai").assert;
const takeUntil = require("../takeUntil");

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

//TEST CASES

describe("#takeUntil", () => {

  it("given array: [1, 2, 5, 7, 2, -1, 2, 4, 5] should return [1,2,5,7,2]", () =>{
    assert.deepEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2]);
  });

  it("given array: ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] should return [1,2,5,7,2]", () =>{
    assert.deepEqual(takeUntil(data2, x => x === ','),  ["I've", "been", "to", "Hollywood"]);
  });
});