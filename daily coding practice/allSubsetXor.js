// Given an array arr[], return the sum of the XOR of all elements for every possible subset of the array. Subsets with the same elements should be counted multiple times.

// An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

// Note: The answer is guaranteed to fit within a 32-bit integer.

function subsetXORSum(arr) {
        const n = arr.length;
    let answer = 0;

    // For each bit from 0 to 31
    for (let bit = 0; bit < 31; bit++) {
        let hasBit = false;

        // Check if this bit appears in any element
        for (let x of arr) {
            if (x & (1 << bit)) {
                hasBit = true;
                break;
            }
        }

        if (hasBit) {
            answer += (1 << bit) * (1 << (n - 1));
        }
    }

    return answer;
}
console.log(subsetXORSum([7, 2]));  // → 6