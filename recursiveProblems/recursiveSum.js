'use strict';

function sum (item, n) {
    if (n === 0 && typeof item[n] === 'number') {
        return item[n];
    }

    if (n === -1) {
        return 0;
    }

    if (typeof item[n] === 'number') {
        return item[n] + sum(item, n - 1);
    } else if (item.length !== 0) {
        return sum(item[n], item[n].length - 1) + sum(item, n - 1);
    }
}

const arr = [1, [], 2, [3], 4, [5, 6], 7, [8, [], [9], [10, 11]]];
// const arr1 = [1, [2], 3, 4, [5]];

console.log(sum(arr, arr.length - 1));
