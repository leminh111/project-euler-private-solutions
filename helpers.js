function isEven(n) {
    return n % 2 === 0;
}

function isSmallerThan(x, y) {
    return x < y;
}

function sumEvenNumbers(numberArray) {
    return numberArray.reduce((acc, currentValue) => isEven(currentValue) ? acc + currentValue : acc, 0);
}

function reverseString(string) {
    const array = string.split('');
    const reverseArray = array.reverse();
    return reverseArray.join('');
}

function evenlyDivide(numberList, divider) {
    let isEvenlyDivide = false;

    for (let j = 0; j < numberList.length; j++) {
        const currentNumber = numberList[j];
        if (currentNumber > divider) break;
        isEvenlyDivide = divider % currentNumber === 0;
        if (isEvenlyDivide) break;
    }

    return isEvenlyDivide;
}

function isPrime(primeNumbers, number) {
    const middleNumber = Math.sqrt(number);

    if (last(primeNumbers) < middleNumber) {
        throw new Error("Insufficient prime numbers");
    }

    return !evenlyDivide(primeNumbers, number);
}

function generatePrimeNumbers(upperLimit) {
    const primeNumbers = [2, 3];

    for (let i = 4; i <= upperLimit; i++) {
        let iIsPrime = isPrime(primeNumbers, i);
        iIsPrime && primeNumbers.push(i);
    }

    return primeNumbers;
}

function nextPrime(previousPrimes) {
    const lowerLimit = last(previousPrimes);
    let currentNumber = lowerLimit;

    while (!isPrime(previousPrimes, currentNumber)) {
        currentNumber++;
    }

    return currentNumber;
}

function last(array) {
    return array[array.length - 1];
}

module.exports = {
    isEven, isSmallerThan, sumEvenNumbers, reverseString,
    evenlyDivide,
    isPrime,
    generatePrimeNumbers,
    nextPrime,
    last
};