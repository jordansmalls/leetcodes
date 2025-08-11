// Merge Alternately
/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

const mergeAlternately = function(s1, s2) {
    const minLength = Math.min(s1.length, s2.length);
    let res = "";
    for(let i = 0; i < minLength; ++i) {
        res += s1[i] + s2[i];
    };

    // append the remaining chars
    if(s1.length > s2.length) {
        res += s1.slice(minLength);
    } else {
        res += s2.slice(minLength);
    };
    return res;
};

console.log(mergeAlternately("abc", "pqr") === "apbqcr")

// tests pass