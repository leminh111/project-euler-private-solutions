const helpers = require('./helpers');

function getLargestPrimeFactor(n) {
    const primeFactors = [2];

    // We will divide the number by the prime numbers until it's 1
    while (n !== 1) {
        const currentPrime = helpers.last(primeFactors);

        if (n % currentPrime === 0) {
            n = n / currentPrime;
            continue;
        }

        primeFactors.push(helpers.nextPrime(primeFactors));
    }

    return helpers.last(primeFactors);
}

module.exports = { getLargestPrimeFactor };