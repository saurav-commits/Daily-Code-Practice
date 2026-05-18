class Solution {
    constructor() {
        this.memo = new Map();
    }

    maxSum(n) {
        // Base case
        if (n === 0) return 0;

        // Memoized result
        if (this.memo.has(n)) {
            return this.memo.get(n);
        }

        // Recursive breakdown
        let breakValue =
            this.maxSum(Math.floor(n / 2)) +
            this.maxSum(Math.floor(n / 3)) +
            this.maxSum(Math.floor(n / 4));

        // Take maximum
        let ans = Math.max(n, breakValue);

        // Store result
        this.memo.set(n, ans);

        return ans;
    }
}