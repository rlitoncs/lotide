//Require Modules
const assert = require("chai").assert;
const flatten = require("../flatten");

//TEST CASE
describe("#flatten", () => {

  it("should return [1,2,3,4,5,6] when given [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
  });

  it("should return [[]] when given [[[]]]", () => {
    assert.deepEqual(flatten([[[]]]), [[]]);
  });

  it("should return [1, []] when given [1,[[]]]", () => {
    assert.deepEqual(flatten([1,[[]]]), [1, []]);
  });

  it("should return [1,1,[1]] when given [1,[1,[1]]]", () => {
    assert.deepEqual(flatten([1,[1,[1]]]), [1,1,[1]]);
  });
  
  it("should return [[[]],[]] when given [[], [[[]]], [[]], []]]", () => {
    assert.deepEqual(flatten([[], [[[]]], [[]], []]), [[[]],[]]);
  });

});
