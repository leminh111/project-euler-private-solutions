const { getSumEvenFibonacciNumbers } = require('./problem-2');
const { getLargestPrimeFactor } = require('./problem-3');

const results = {
    problem2: getSumEvenFibonacciNumbers(4000000),
    problem3: getLargestPrimeFactor(600851475143),
};
console.table(results);