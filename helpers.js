function isEven(n) {
    return n % 2 === 0;
}

function isSmallerThan(x, y) {
    return x < y;
}

function sumEvenNumbers(numberArray) {
    return numberArray.reduce((acc, currentValue) => isEven(currentValue) ? acc + currentValue : acc, 0);
}

module.exports = { isEven, isSmallerThan, sumEvenNumbers };