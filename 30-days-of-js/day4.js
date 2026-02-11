/*
    2665. Counter II

    Write a function createCounter. It should accept an initial integer init. It should return an object with three functions. The three functions are:

    - increment() increases the current value by 1 and then returns it.

    - decrement() reduces the current value by 1 and then returns it.

    - reset() sets the current value to init and then returns it.
*/

// input -> integer, init, that is any num that is -1000 <= init <= 1000
// output -> object, that has increment func (adds 1  to curr value and returns result), decrement func (subtracts 1 fom curr value and returns result), and reset func (resets the curr value back to init and returns result)


/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */


class Counter {
  constructor(init) {
    this.init = init;
    this.curr = init;
  }

  increment() {
    this.curr += 1;
    return this.curr;
  }

  decrement() {
    this.curr -= 1;
    return this.curr;
  }

  reset() {
    this.curr = this.init;
    return this.curr;
  }
}

const createCounter = function(init) {
    return new Counter(init)
}