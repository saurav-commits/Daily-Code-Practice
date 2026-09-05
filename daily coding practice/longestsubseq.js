function longestSubseqDiffOne(arr) {
    const dp = new Map();
    let best = 0;

    for (const x of arr) {
        const a = dp.get(x - 1) || 0;
        const b = dp.get(x + 1) || 0;
        const len = Math.max(a, b) + 1;
        dp.set(x, len);
        best = Math.max(best, len);
    }

    return best;
}

console.log(longestSubseqDiffOne([10, 9, 4, 5, 4, 8, 6])); // 3
console.log(longestSubseqDiffOne([1, 2, 3, 2, 3, 7, 2, 1])); // 7