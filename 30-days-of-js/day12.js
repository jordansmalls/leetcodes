/*
2723. Add Two Promises

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
*/


// var addTwoPromises = async function(promise1, promise2) {
//     const promise1Value = await promise1;
//     const promise2Value = await promise2;
//     return promise1Value+promise2Value
// };

const addTwoPromises = async (p1, p2) => (await Promise.all([p1, p2])).reduce((a,b) => a+b);
