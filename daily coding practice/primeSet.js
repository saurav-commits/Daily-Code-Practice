function countPrimeSetBits(left, right) {

    const primeSet = new Set([2,3,5,7,11,13,17,19]);

    function countBits(n) {
        let count = 0;
        while (n > 0) {
            n = n & (n - 1);
            count++;
        }
        return count;
    }

    let result = 0;

    for (let num = left; num <= right; num++) {

        let bits = countBits(num);

        if (primeSet.has(bits)) {
            result++;
        }
    }

    return result;
}

console.log(countPrimeSetBits(6, 10)); // 4

console.log(countPrimeSetBits(10, 15)); // 5