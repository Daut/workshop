/* eslint no-unused-vars: ["should"] */

'use strict';

const Find = require('./unpaired');
const should = require('chai').should();

describe('unpaired method test', () => {
    it('should return 1', () => {
        const array = [2, 1, 3, 4, 2, 4, 3];
        Find.unpaired(array).should.equal(1);
    });

    it('should return 4', () => {
        const array = [2, 3, 4, 2, 3];
        Find.unpaired(array).should.equal(4);
    });
});

describe('unpairedHash method test', () => {
    it('should return 1', () => {
        const array = [2, 1, 3, 4, 2, 4, 3];
        Find.unpairedHash(array).should.equal(1);
    });

    it('should return 4', () => {
        const array = [2, 3, 4, 2, 3];
        Find.unpairedHash(array).should.equal(4);
    });
});
