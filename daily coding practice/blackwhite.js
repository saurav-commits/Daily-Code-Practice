class Solution {
    numOfWays(n, m) {
        const cells = n * m;

        const total = cells * (cells - 1);

        const attacks =
            4 * (
                Math.max(0, n - 1) * Math.max(0, m - 2) +
                Math.max(0, n - 2) * Math.max(0, m - 1)
            );

        return total - attacks;
    }
}