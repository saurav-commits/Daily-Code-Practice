function findPosition(n) {
    // Step 1: Check if exactly one set bit
    if (n === 0 || (n & (n - 1)) !== 0) {
        return -1;
    }

    // Step 2: Find position (1-based)
    let position = 1;

    while ((n & 1) === 0) {
        n = n >> 1;
        position++;
    }

    return position;
}

// Example usage:
console.log(findPosition(18)); // Output: 2
console.log(findPosition(0));