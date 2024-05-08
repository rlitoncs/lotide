//Require Modules
const assertObjectsEqual = require("../assertObjectsEqual");

//Test Cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);


// Console log objects with/without template literals
console.log("\n");
console.log("Console log without template literals: " + "\n" +  "shirtObject: ", shirtObject);
console.log(`\nConsole log using template literals without the inspect() function: \nshirtObject: ${shirtObject}`);