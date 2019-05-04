const helpers = require('./helpers');

function isPalindromicNumber(n) {
    const stringNumber = n.toString();
    const reverseString = helpers.reverseString(stringNumber);
    return stringNumber === reverseString;
}

function getBiggestPalindromicNumber(n) {

}

module.exports = { isPalindromicNumber };