/**
 * @file
 * Problem: Write recursive function to calculate factorial of any given number.
 */

'use strict';

function factorial (n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));