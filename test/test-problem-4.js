const assert = require('assert');
const { isPalindromicNumber } = require('../problem-4');

describe('Problem 3', function() {
    describe('isPalindromicNumber function', function() {
        it('should work properly', function() {
            assert.equal(isPalindromicNumber(9009), true);
            assert.equal(isPalindromicNumber(123321), true);
            assert.equal(isPalindromicNumber(121), true);
            assert.equal(isPalindromicNumber(123), false);
        });
    });
});