class Solution {
    /**
     * @param {number[]} arr
     * @param {number} m
     * @returns {number}
     */
    maxFruits(arr, m) {
        const n = arr.length;
        if (n === 0 || m <= 0) return 0;
        if (m >= n) return arr.reduce((a, b) => a + b, 0);

        // sum of first window: indices 0..m-1
        let window = 0;
        for (let i = 0; i < m; i++) window += arr[i];

        let best = window;

        // slide the window start from 0 -> n-1 (covers all circular starting points)
        for (let i = 0; i < n; i++) {
            window = window - arr[i] + arr[(i + m) % n];
            if (window > best) best = window;
        }

        return best;
    }
}

module.exports = Solution;