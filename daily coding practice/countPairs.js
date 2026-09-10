function countPairs(x, y) {
    if (y % x !== 0) {
        return 0;
    }

    let n = y / x;
    let distinctPrimeFactors = 0;

    for (let p = 2; p * p <= n; p++) {
        if (n % p === 0) {
            distinctPrimeFactors++;

            while (n % p === 0) {
                n /= p;
            }
        }
    }

    // If n > 1, it is also a distinct prime factor
    if (n > 1) {
        distinctPrimeFactors++;
    }

    return Math.pow(2, distinctPrimeFactors);
}