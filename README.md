# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @rlitoncs/lotide`

**Require it:**

`const _ = require('@rlitoncs/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(arr1, arr2)`: takes in 2 arrays and checks whether the 2 arrays are matching. If it is, the arrays are outputted along with an assertion message displaying if it has passed or failed 
- `assertEqual(actual, expected)`: expects two arguments and returns a passed assertion or a failed assertion, depending on whether the two arguments strictly match
- `assertObjectsEqual(object1, object2)`: takes in 2 objects and checks to see if the objects are equal. If it is, the objects are outputted along with an assertion message displaying a if it passed or failed
- `countLetters(string)`: takes in a string and counts the number of occurences of each letter in the string. Returns a object back with the occurences of each letter in the string
- `countOnly(allItems, itemsToCount)`: takes in an array of items and a itemsToCount object. The array counts only the items that need to be counted for in itemsToCount object, then returns a new object with the selected items and it's associated count value 
- `eqArrays(arr1, arr2)`: takes in 2 arrays and checks that the elements of both arrays are identical in value and position. Returns true if both arrays are identical, otherwise false
- `eqObjects(object1, object2)`: takes in 2 objects and checks to see if the both objects have identical keys and values. Returns true if both objects are identical, otherwise false
- `findKey(object, callbackF)`: takes in an object and a callback function and returns the key that is true according to the callback function
- `findKeyByValue(object, value)`: takes in an object, and a target value, and returns the first key that matches the target value
- `flatten(arr)`: will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array
- `head(arr)`: takes in an array and returns the first element of the array
- `tail(arr)`: takes in an array and returns the rest of the array without the first element
- `letterPositions(string)`: takes in a string and returns an object of all the indexes of where each letter occurs in the sentence
- `map(arr)`: takes in an array and a callback function. Returns a new array with the new content as applied from the callback function.
- `middle(arr)`: will take in an array and returns an array of the middle-most element(s) of the given array
- `takeUntil(arr, callbackF)`: takes in an array and a callback function and returns a new array with content, up until it satifies the callback function condition
- `without(sourceArr, itemsToRemove)`: takes in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array