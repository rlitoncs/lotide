//Require Modules
const assert = require("chai").assert;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};


console.log(`Test Cases:\nshirtObject: ${JSON.stringify(shirtObject)}\nanotherShirtObject ${JSON.stringify(anotherShirtObject)}\nmultiColorShirtObject ${JSON.stringify(multiColorShirtObject)}\nanotherMultiColorShirtObject ${JSON.stringify(anotherMultiColorShirtObject)}\nlongSleeveMultiColorShirtObject ${JSON.stringify(longSleeveMultiColorShirtObject)}`);

// TEST CASES

describe("#eqObjects", () => {

  //comparing shirtObject with anotherShirtObject
  it("should return TRUE when comparing shirtObject and anotherShirtObject", () => {
    assert.deepEqual(shirtObject, anotherShirtObject);
  });

  //comparing shirtObject with longSleeveShirtObject
  it("should return FALSE when comparing shirtObject and longSleeveShirtObject", () => {
    assert.notDeepEqual(shirtObject, longSleeveShirtObject);
  });

  //comparing multiColorShirtObject with anotherMultiColorShirtObject
  it("should return TRUE when comparing multiColorShirtObject and anotherMultiColorShirtObject", () => {
    assert.deepEqual(multiColorShirtObject, anotherMultiColorShirtObject);
  });

  //comparing multiColorShirtObject with longSleeveMultiColorShirtObject
  it("should return FALSE when comparing multiColorShirtObject and longSleeveMultiColorShirtObject", () => {
    assert.notDeepEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
  });

});
