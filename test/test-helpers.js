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
});