var minMoves = function(nums, limit) {
    const n = nums.length;
    const pairs = n / 2;

    // Difference array
    const diff = new Array(2 * limit + 2).fill(0);

    for (let i = 0; i < pairs; i++) {
        let a = nums[i];
        let b = nums[n - 1 - i];

        let minVal = Math.min(a, b);
        let maxVal = Math.max(a, b);

        let sum = a + b;

        // Initially 2 moves for all sums

        // Reduce to 1 move for [minVal+1, maxVal+limit]
        diff[minVal + 1] -= 1;
        diff[maxVal + limit + 1] += 1;

        // Reduce to 0 move at exact sum
        diff[sum] -= 1;
        diff[sum + 1] += 1;
    }

    let result = Infinity;

    // Base cost: all pairs need 2 moves
    let current = pairs * 2;

    for (let s = 2; s <= 2 * limit; s++) {
        current += diff[s];
        result = Math.min(result, current);
    }

    return result;
};