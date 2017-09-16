class PrimeFactors {
	constructor(no) {
		this.number = no >= 2 ? no : null;
		this.primes = [2,3,5,7];
		this.primeFactors = this.findPrimeFactors();
		this.largestPrimeFactor = this.primeFactors[this.primeFactors.length - 1];
    }

	findPrimeFactors() {
		let number = this.number;
		let i=0;
        let result = [];
        while (number !== 1 && this.number > 0) {
            if (number % this.primes[i] === 0) {
                result.push(this.primes[i]);
                number /= this.primes[i];
            } else {
                i++;
                if (i >= this.primes.length) {
					this.genNextPrime();
                }
            }
        }
		return result;
    }

	genNextPrime() {
		let nextPrime = this.primes[this.primes.length-1] + 1;
        let counter = 2;
        while (nextPrime !== counter) {
            if (nextPrime % counter === 0) {
                nextPrime++;
                counter = 2;
            }
            counter++;
        }
        this.primes.push(nextPrime);
    }
}
