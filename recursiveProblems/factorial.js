/**
 * @file
 * Problem: Write recursive function to calculate factorial of any given number.
 */

'use strict';

const factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

module.exports = factorial;
