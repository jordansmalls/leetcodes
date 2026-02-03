/*
reverse words in a string

Given an input string s, reverse the order of the words.A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Ex: Input: s = "the sky is blue", Output: "blue is sky the"
Ex: Input: s = "  hello world  ", Output: "world hello"
Ex: Input: s = "a good   example", Output: "example good a"
*/

/**
 * @param {string} s
 * @return {string}
 */

// input -> string
// output -> string, containing the words from the input string in reverse order concatenated by a single space

// trim the input string to start off by removing any trailing whitespace
// split the string into an arr of words, by using a delimiter of a space
// create a new array using the filter static method, only accepting indices that are not spaces
// reverse the filtered array and join back into a string using space delimiter (maintaining word format)and return

const reverseWords = s => s.trim().split(" ").filter((word) => !word == " ").reverse().join(" ")
