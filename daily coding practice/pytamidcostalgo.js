class Solution {
    minCost(arr) {
        const n = arr.length;

        const left = new Array(n);
        const right = new Array(n);

        // Maximum possible increasing sequence ending at i
        left[0] = 1;

        for (let i = 1; i < n; i++) {
            left[i] = Math.min(arr[i], left[i - 1] + 1);
        }

        // Maximum possible decreasing sequence starting at i
        right[n - 1] = 1;

        for (let i = n - 2; i >= 0; i--) {
            right[i] = Math.min(arr[i], right[i + 1] + 1);
        }

        let maxPeak = 0;
        let total = 0;

        for (let i = 0; i < n; i++) {
            total += arr[i];

            const peak = Math.min(left[i], right[i]);
            maxPeak = Math.max(maxPeak, peak);
        }

        // A pyramid with peak h contains h^2 total height
        return total - maxPeak * maxPeak;
    }
}