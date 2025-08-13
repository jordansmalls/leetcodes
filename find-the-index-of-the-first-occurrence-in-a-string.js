// Find the Index of the First Occurrence in a String
/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

// input -> 2 strings, only lowercase english chars
// output -> index of the first occurrence of needle in haystack OR -1 if not present

// built in JS string method index of -> returns the first index of an occurence within a string or -1 if not found

/**
 *
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 */

// const strStr = (haystack, needle) => haystack.indexOf(needle)



// sliding window approach

const strStr = function(haystack, needle) {
    if(needle === "") return 0
    if(haystack === needle) return 0

    for(let i = 0; i <= haystack.length - needle.length; ++i) {
        if(haystack.slice(i, i + needle.length) === needle) {
            return i
        }
    }
    return -1
}


/*
For longer strings and more complex patterns, the V8 engine may employ more advanced algorithms like Boyer-Moore, Knuth-Morris-Pratt (KMP), or Rabin-Karp.
These algorithms use different strategies to reduce the number of character comparisons and achieve faster search times.

For prod level code, the indexOf approach would be simpler, faster, and less error prone
*/

const haystack = "sadbutsad"
const needle = "sad"
console.log(strStr(haystack, needle)) // 0

// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

const haystackTwo = "leetcode"
const needleTwo = "leeto"
console.log(strStr(haystackTwo, needleTwo)) // -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
