function countBSTWithEachRoot(arr) {
    const n = arr.length;

    // Step 1: Create sorted copy
    const sorted = [...arr].sort((a, b) => a - b);

    // Step 2: Precompute Catalan numbers
    const catalan = new Array(n + 1).fill(0);
    catalan[0] = 1;
    catalan[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            catalan[i] += catalan[j] * catalan[i - j - 1];
        }
    }

    // Step 3: Map value -> index in sorted array
    const indexMap = new Map();
    for (let i = 0; i < n; i++) {
        indexMap.set(sorted[i], i);
    }

    // Step 4: Build result in original order
    const result = [];

    for (let i = 0; i < n; i++) {
        const idx = indexMap.get(arr[i]);

        let leftCount = idx;
        let rightCount = n - idx - 1;

        let ways = catalan[leftCount] * catalan[rightCount];
        result.push(ways);
    }

    return result;
}

// Test
console.log(countBSTWithEachRoot([2, 1, 3])); // [1, 2, 2]
console.log(countBSTWithEachRoot([2, 1]));    // [1, 1]