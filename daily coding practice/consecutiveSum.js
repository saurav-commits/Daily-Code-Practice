function isSumOfConsecutive(n) {
    if (n < 3) return false;

    while ((n & 1) === 0) {
        n >>= 1;
    }

    return n > 1;
}