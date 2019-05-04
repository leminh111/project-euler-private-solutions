const helpers = require('./helpers');

function generateFibToMax(maxFib) {
    const fib = [1, 2];
    let lastIndex = 1;

    while (helpers.isSmallerThan(fib[lastIndex], maxFib)) {
        const nextFib = fib[lastIndex - 1] + fib[lastIndex];

        if (!helpers.isSmallerThan(nextFib, maxFib)) break;

        fib.push(nextFib);
        lastIndex++;
    }

    return fib;
}

function getResult (maxFib) {
    const fibTillMaxFib = generateFibToMax(maxFib);
    return helpers.sumEvenNumbers(fibTillMaxFib);
}

module.exports = { generateFibToMax, getResult };
