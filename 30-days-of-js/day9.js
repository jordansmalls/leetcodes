/*
    2703. Return Length of Arguments Passed

    Write a function argumentsLength that returns the count of arguments passed to it.
*/

/**
 *
 * @param  {...(null|boolean|number|string|Array|Object)} args
 * @returns {number}
 */

// var argumentsLength = function(...args) {
//     return args.length;
// };

const argumentsLength = (...args) => args.length;
