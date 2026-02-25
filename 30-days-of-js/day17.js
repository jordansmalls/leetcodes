/*
2677. Chunk Array


Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

Please solve it without using lodash's _.chunk function.
*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

// const chunk = function (arr, size) {
//   if(arr.length < 1) return [];
//   if(size > arr.length) return arr;

//   let res = [];
//   let curr = 0;

//   while (curr < arr.length) {
//     let temp = [];


//     while (temp.length < size && curr < arr.length) {
//       temp.push(arr[curr]);
//       curr += 1;
//     }


//     res.push(temp);
//   }

//   return res;
// };


const chunk = (arr, size) => {
    if(arr.length < 1) return [];
    if(size > arr.length) return arr;

    const res = [];

    for(let i = 0; i < arr.length; i+=size) {
        const chunk = arr.slice(i, i + size);
        res.push(chunk)
    }
    return res;
}


let test = [1, 2, 3, 4, 5];
console.log(chunk(test, 1));

// [[1], [2], [3], [4], [5]]