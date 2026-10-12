class Solution {
    minCutSquares(n, m) {
        let count = 0;

        while (n > 0 && m > 0) {
            count += Math.floor(n / m);
            n %= m;

            // Keep n >= m for the next iteration
            [n, m] = [m, n];
        }

        return count;
    }
}