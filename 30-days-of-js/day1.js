// 2667. Create Hello World Function
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".


// input -> arguments into the createHelloWorld func have no impact whatsoever
// output -> return a function that returns the string "Hello World"

// approach:
    // return a function that returns the string "Hello Worlddd"


/**
 * @return {Function}
 */

const createHelloWorld = function () {
  return () => 'Hello World';
};