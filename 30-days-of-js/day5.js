/*

2635. Apply Transform Over Each Element in Array

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]

*/

/**
 *
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const map = function (arr, fn) {
  const r = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    r[i] = fn(arr[i], i);
  }
  return r;
};