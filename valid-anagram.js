// Valid Anagram
/*
Given two strings s and t, return true if t is an of s, and false otherwise.
*/

/**
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const idx of s) {
    map.set(idx, (map.get(idx) || 0) + 1);
  }

  for (const char of t) {
    if (!map.has(char)) {
      return false;
    } else {
      map.set(char, map.get(char) - 1);
    }

    if (map.get(char) == 0) {
      map.delete(char);
    }
  }

  return map.size == 0;
};

console.log(isAnagram("racecar", "carrace")); // true
