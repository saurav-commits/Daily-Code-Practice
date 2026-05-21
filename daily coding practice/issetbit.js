function allBitsSet(n) {
    // 0 should return false
    if (n === 0) return false;

    // Check if n is of form 2^k - 1
    return (n & (n + 1)) === 0;
}

// Examples
console.log(allBitsSet(7)); // true
console.log(allBitsSet(8)); // false
console.log(allBitsSet(0)); // false