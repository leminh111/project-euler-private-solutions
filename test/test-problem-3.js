const assert = require('assert');
const { getLargestPrimeFactor } = require('../problem-3');

describe('Problem 3', function() {
    describe('getResult function', function() {
        it('should work properly', function() {
            assert.equal(getLargestPrimeFactor(10), 5);
            assert.equal(getLargestPrimeFactor(21), 7);
            assert.equal(getLargestPrimeFactor(23), 23);
        });
    });
});