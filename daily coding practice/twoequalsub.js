function canSplit(arr) {
    let totalSum = arr.reduce((sum, num) => sum + num, 0);

    // If total sum is odd, cannot split
    if (totalSum % 2 !== 0) return false;

    let target = totalSum / 2;
    let prefixSum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        prefixSum += arr[i];

        if (prefixSum === target) {
            return true;
        }
    }

    return false;
}

// Example usage:
console.log(canSplit([1, 2, 3, 4]));