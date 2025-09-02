// Is Object Empty?
/*
Given an object or an array, return if it is empty.

    An empty object contains no key-value pairs.
    An empty array contains no elements.

You may assume the object or array is the output of JSON.parse.
*/

// input --> objects or arrays
// output --> boolean, determined by whether or not the input is empty

// Object.keys(obj).length === 0
// true: return true
// else: return false

/**
 *
 * @param {object} obj
 * @returns {boolean}
 */

// const isEmpty = obj => Object.keys(obj).length == 0 ? true : false

// O(n) time complexity

const isEmpty = function (obj) {
  for (const idx in obj) {
    return false;
  }
  return true;
};

// O(1) time complexity

const objA = { x: 5, y: 42 };
console.log(isEmpty(objA) === false);

Input: objB = {};
console.log(isEmpty(objB) == true);

Input: objC = [null, false, 0];
console.log(isEmpty(objC) === false);
