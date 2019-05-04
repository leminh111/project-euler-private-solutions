const assert = require('assert');
const problem2 = require('../problem-2');

describe('Problem 2', function() {
    describe('generateFibToMax function', function() {
        it('should generate correct fibonacci sequence until 4 million', function() {
            const maxFib = 4000000;
            const fibonacciSequence = problem2.generateFibToMax(maxFib);
            const lastFibonacciNumber = fibonacciSequence[fibonacciSequence.length - 1];
            assert.equal(lastFibonacciNumber < maxFib, true);
        });
    });

    describe('getResult function', function() {
        it('should calculate the even fibonacci correctly', function() {
            assert.equal(problem2.getResult(10), 10);
        });
    });
});