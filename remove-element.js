// Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val. Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.

// - Return k.

// input -> array of ints, int to search for
// output -> k (the number of element within nums arr which are not equal to val)

/**
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = function (nums, val) {
  let left = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] !== val) {
      nums[left] = nums[i];
      ++left;
    }
  }
  console.log(nums);
  return left;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2,  nums = [2,2,_,_]
