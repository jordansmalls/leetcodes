/*
    Array Prototype Last

    Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

    You may assume the array is the output of JSON.parse.
*/

// input -> valid JSON arrays
// output -> the last index of an array, (if empty: -1)
// if length is greater than 0, return last index, else return -1

Array.prototype.last = function() {
    return this.length > 0 ? this[this.length - 1] : -1
}