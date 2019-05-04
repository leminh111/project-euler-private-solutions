const { isSmallerThan, sumEvenNumbers } = require('./helpers');

function generateFibToMax(maxFib) {
    const fib = [1, 2];
    let lastIndex = 1;

    while (isSmallerThan(fib[lastIndex], maxFib)) {
        const nextFib = fib[lastIndex - 1] + fib[lastIndex];

        if (!isSmallerThan(nextFib, maxFib)) break;

        fib.push(nextFib);
        lastIndex++;
    }

    return fib;
}

function getSumEvenFibonacciNumbers (maxFib) {
    const fibTillMaxFib = generateFibToMax(maxFib);
    return sumEvenNumbers(fibTillMaxFib);
}

module.exports = { generateFibToMax, getSumEvenFibonacciNumbers };
