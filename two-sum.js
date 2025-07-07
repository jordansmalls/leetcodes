// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

/**
 *
 * @param {number[]} array
 * @param {number} target
 * @return {number[]}
 */

// input -> array of nums and a target num
// return -> array containing the indices of the two numbers that add up to the target

// create a hashmap to store values and have fast lookup times w/ key value pairs
// find the complement (what num is needed) ==> target - curr number
// if the complement is present within the map, return its key and the index of the curr num

const twoSum = function (array, target) {
  const map = new Map();
  for (let i = 0; i < array.length; ++i) {
    let complement = target - array[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

// all tests pass
