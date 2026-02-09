/*
    2620. Counter

    Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc)
*/

/**
 * @param {number} n
 * @return {Function} counter
 */

const createCounter = function(n) {
    let curr = n;
    let firstPass = true;

    return function() {
        if(firstPass === true) {
            firstPass = false;
            return curr;
        } else {
            curr+=1
            return curr;
        };
    };
};