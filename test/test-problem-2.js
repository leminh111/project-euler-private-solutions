const assert = require('assert');
const problem2 = require('../problem-2');
const { last } = require('../helpers');

describe('Problem 2', function() {
    describe('generateFibToMax function', function() {
        it('should generate correct fibonacci sequence until 4 million', function() {
            const maxFib = 4000000;
            const fibonacciSequence = problem2.generateFibToMax(maxFib);
            const lastFibonacciNumber = last(fibonacciSequence);
            assert.equal(lastFibonacciNumber < maxFib, true);
        });
    });

    describe('getResult function', function() {
        it('should calculate the even fibonacci correctly', function() {
            assert.equal(problem2.getSumEvenFibonacciNumbers(10), 10);
        });
    });
});