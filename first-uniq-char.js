/*
 First Unique Character in a String
Given a string s, find the first non-repeating character in it and return its index. If a unique character does not exist, return −1.
*/

/**
 * @param {string} s
 * @return {number}
 */

// input --> string, containing only lowercase english letters
// output --> -1, if a unique char does not exist, otherwise, return the first unique chars' index.

// create map to store chars of input s as keys, and their respective count as values
// while iterating over the input string & searching the map for its value
    // if the value == 1 (unique), return the current index
// if looping finishes without return, -1

const firstUniqChar = (s) => {
    const map = new Map()
    for(const char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for(let i = 0; i < s.length; ++i) {
        let char = s[i];

        if(map.get(char) === 1) {
            // return index of first uniq num
            return i
        }
    }
    return -1;
}

console.log(firstUniqChar("leetcode") == 0) // true
console.log(firstUniqChar("loveleetcode") == 2) // true
console.log(firstUniqChar("aabb") == -1) // true