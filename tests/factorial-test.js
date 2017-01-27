/* eslint no-unused-vars: ["off", {"varsIgnorePattern": "should"}] */

'use strict';

const factorial = require('../recursiveProblems/factorial');
const should = require('chai').should();

describe('hanoi tower test', () => {
    it('should return 5040', () => {
        factorial(7).should.equal(5040);
    });

    it('should return 720', () => {
        factorial(6).should.equal(720);
    });

    it('should return 120', () => {
        factorial(5).should.equal(120);
    });

    it('should return 24', () => {
        factorial(4).should.equal(24);
    });

    it('should return 6', () => {
        factorial(3).should.equal(6);
    });
});
