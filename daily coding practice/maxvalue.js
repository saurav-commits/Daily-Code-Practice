class Solution {
    maxValue(n, a, b, k) {
        const diff = new Array(n + 1).fill(0);

        // Apply all range updates
        for (let i = 0; i < a.length; i++) {
            diff[a[i]] += k[i];

            // Stop adding after b[i]
            if (b[i] + 1 < n) {
                diff[b[i] + 1] -= k[i];
            }
        }

        // Prefix sum + find maximum
        let current = 0;
        let max = 0;

        for (let i = 0; i < n; i++) {
            current += diff[i];
            max = Math.max(max, current);
        }

        return max;
    }
}