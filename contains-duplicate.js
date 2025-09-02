// Contains Duplicate
/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

// input --> array of nums (only numbers no funny biz)
// output --> boolean: return true if a dupe is present, else, return false

/**
 *
 * @description this function returns a boolean value, determined on the presence of a duplicate in an array of nums.
 * @param {number[]} nums
 * @return {boolean}
 */

// create a map and store each value of the array as a key, with a value of 1
// while iterating over the array, if a value that is already present appears, break the loop and return true -> a duplicate was found.
// if the loop completes without being broken (no duplicate found), return false, as there were no dupes found within the input array nums.

const containsDuplicate = (nums) => {
  const map = new Map();
  for (const idx of nums) {
    if (map.has(idx)) {
      // check for existence of curr number
      return true;
    } else {
      map.set(idx, 1);
    }
  }
  return false;
};

// quick shorthand solution implementing a set
const containsDuplicateTwo = (nums) =>
  new Set(nums).size === nums.length ? false : true;

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

console.log(containsDuplicateTwo([1, 2, 3, 1])); // true
console.log(containsDuplicateTwo([1, 2, 3, 4])); // false
console.log(containsDuplicateTwo([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
