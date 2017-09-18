function findPrimeFactors(no) {
	let currentPrime = 2;
	let result = [];
	while (no !== 1) {
		if (no%currentPrime === 0) {
			result.push(currentPrime);
			no /= currentPrime;
        } else {
			currentPrime = genNextPrime(currentPrime);
        }
    }
	return result;
}


function genNextPrime(currentPrime) {
    let nextPrime = currentPrime + 1;
    let counter = 2;
    while (nextPrime !== counter) {
        if (nextPrime % counter === 0) {
            nextPrime++;
            counter = 2;
        }
        counter++;
    }
    return nextPrime;
}
