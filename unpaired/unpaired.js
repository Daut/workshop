/**
 * @file
 * Problem: Find unpaired element in the array (only one that has no duplicate)
 *
 * Two solutions have been proposed;
 *
 * 1. Solution is based on usage of XOR operator and fact that
 * XOR has associative and commutative properties. Time complexity
 * of this solution is O(N) with space complexity of O(1).
 *
 * 2. Solution is based on usage of hash map. Javascript object is hash map, because
 * it has O(1) access time and O(1) insertion time. This solution has time complexity
 * of O(2N) and O(N) space complexity which makes it worse solution then
 * solution with XOR operator.
 */

'use strict';

class Find {
    /**
     *
     * Solution is based on usage of XOR operator and fact that
     * XOR has associative and commutative properties.
     *
     * Example:
     * 3 XOR 4 XOR 1 XOR 4 XOR 3 =>
     * (3 XOR 3) XOR (4 XOR 4) XOR 1 =>
     * 0 XOR 0 XOR 1 = 1
     */
    static unpaired (array) {
        let unpairedElem = 0;

        for (let i = 0; i < array.length; i++) {
            unpairedElem ^= array[i];
        }

        return unpairedElem;
    }

    /**
     *
     * Solution is based on usage of hash map. Javascript object is hash map, because
     * it has O(1) access time and O(1) insertion time. This solution has time complexity
     * of O(2N) and O(N) space complexity which makes it worse solution then
     * solution with XOR operator
     */
    static unpairedHash (array) {
        let unpairedElem = -1;
        const hash = {};

        for (let i = 0; i < array.length; i++) {
            if (hash[array[i]]) {
                hash[array[i]]++;
            } else {
                hash[array[i]] = 1;
            }
        }

        for (let i = 0; i < array.length && unpairedElem === -1; i++) {
            if (hash[array[i]] === 1) {
                unpairedElem = array[i];
            }
        }

        return unpairedElem;
    }
}

module.exports = Find;
