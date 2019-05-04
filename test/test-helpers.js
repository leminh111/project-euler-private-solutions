const assert = require('assert');
const helpers = require('../helpers');

describe('Helpers function', function() {
    describe('isEven works properly', function() {
        it('true for 6', function() {
            assert.equal(helpers.isEven(6), true);
        });

        it('false for 7', function() {
            assert.equal(helpers.isEven(7), false);
        });
    });

    describe('isSmallerThan works properly', function() {
        it('true if -1 < 5', function() {
            assert.equal(helpers.isSmallerThan(-1, 5), true);
        });

        it('false if 9 < 5', function() {
            assert.equal(helpers.isSmallerThan(9, 5), false);
        });
    });

    describe('sumEvenNumbers works properly', function() {
        const testArray = [1,2,3,4,5];

        it(`${testArray} equals 2`, function() {
            assert.equal(helpers.sumEvenNumbers(testArray), 6);
        });
    });

    describe('reverseString works properly', function() {
        it('return olleh for hello', function() {
            assert.equal(helpers.reverseString('hello'), 'olleh');
        });

        it('return 1991 for 1991', function() {
            assert.equal(helpers.reverseString('1991'), '1991');
        });
    });

    describe('evenlyDivide works properly', function() {
        it('15 divide evenly to 3', function() {
            assert.equal(helpers.evenlyDivide([2,3,5], 15), true);
        });

        it('23 is not divided evenly by any number in the list', function() {
            assert.equal(helpers.evenlyDivide([2,3,5], 23), false);
        });
    });

    describe('isPrime works properly', function() {
        it('15 is not a prime number', function() {
            assert.equal(helpers.isPrime([2,3,5], 15), false);
        });

        it('10 is not a prime number', function() {
            assert.equal(helpers.isPrime([2,3,5], 10), false);
        });

        it('23 is a prime number', function() {
            assert.equal(helpers.isPrime([2,3,5], 23), true);
        });

        it('insufficient prime numbers array', function() {
            assert.throws(() => { helpers.isPrime([2,3], 23); }, Error);
        });
    });

    describe('generatePrimeNumbers works properly', function() {
        it('upper limit is 15', function() {
            assert.deepEqual(helpers.generatePrimeNumbers(15), [2,3,5,7,11,13]);
        });

        it('upper limit is 20', function() {
            assert.deepEqual(helpers.generatePrimeNumbers(20), [2,3,5,7,11,13,17,19]);
        });

        it('upper limit is 23', function() {
            assert.deepEqual(helpers.generatePrimeNumbers(23), [2,3,5,7,11,13,17,19,23]);
        });
    });

    describe('nextPrime works properly', function() {
        it('previous prime is 11, return 13', function() {
            assert.equal(helpers.nextPrime([2,3,5,7,11]), 13);
        });
    });

    describe('last works properly', function() {
        const array = [2,1,3,5,6,7,100];
        it(`last of ${array} is 100`, function() {
            assert.equal(helpers.last(array), 100);
        });
    });
});