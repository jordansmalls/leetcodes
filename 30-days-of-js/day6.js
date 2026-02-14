/*

    2634. Filter Elements from Array

    Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

    The fn function takes one or two arguments:

    -> arr[i] - number from the arr
    -> i - index of arr[i]

    filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

    Please solve it without the built-in Array.filter method.
*/

// input -> integer array and a function
// output -> (filtered) array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// const filter = function(arr, fn) {
//     let result = [];
//     for(let i = 0; i < arr.length; ++i) {
//         let value = arr[i];

//         let temp = fn(value, i);

//         if(temp) {
//             result.push(value)
//         }
//     }
//     return result;
// }

// refactor: cleaner solution

const filter = (arr, fn) => {
  let res = [];
  for (const [idx, value] of arr.entries()) {
    if (fn(value, idx)) {
      res.push(value);
    }
  }
  return res;
};