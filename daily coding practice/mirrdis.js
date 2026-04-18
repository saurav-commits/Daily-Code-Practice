function mirrorDistance(n) {
    let original = n;
    let reversed = 0;

    // Reverse the number
    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    // Return absolute difference
    return Math.abs(original - reversed);
}

console.log(mirrorDistance(123)); // Output: 198
console.log(mirrorDistance(456)); // Output: 198