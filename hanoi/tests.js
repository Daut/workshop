/* eslint no-unused-vars: ["off", {"varsIgnorePattern": "should"}] */

'use strict';

const hanoi = require('./hanoi');
const should = require('chai').should();

describe('hanoi tower test', () => {
    it('should work for [3, 2, 1] input array', () => {
        const a = [];
        const b = [];
        const c = [];
        for (let i = 3; i >= 1; i--) {
            a.push(i);
        }

        hanoi(a.length, a, b, c);

        c.should.deep.equal([3, 2, 1]);
    });
});
