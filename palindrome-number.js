// Palindrome Number
/*
Given an integer x, return true if x is a palindrome, and false otherwise.



Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/**
 *
 * @param {number} x
 * @return {boolean}
 */

// input -> number (-231 <= x <= 231 - 1)
// output -> boolean (determined if the input is a palindrome, if yes true else false)

// early termination of func: if x is a negative num, input cannot be a palindrome
// create var containing input as string
// create left and right pointers, traverse the string comparing values at opposite ends
// if curr chars do not match, input num is not a palindrome
// if loop completes, input is a palindrome

const isPalindrome = function (x) {
  if (x < 0) return false;

  const str = x.toString();

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    ++left;
    --right;
  }
  return true;
};

//shorthand
const iP = (x) =>
  x < 0 ? false : +x.toString().split("").reverse().join("") === x;

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(59)); // false

console.log(iP(121)); // true
console.log(iP(-121)); // false
console.log(iP(59)); // false
