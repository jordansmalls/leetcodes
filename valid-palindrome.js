// Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.

/**
 *
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = function (s) {
  // convert string to same casing and removing any non alphanumeric chars
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      // if the characters dont match, input is NOT a valid palindrome
      return false;
    }
    // move the pointers
    ++left;
    --right;
  }
  // input string IS a valid palindrome
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
