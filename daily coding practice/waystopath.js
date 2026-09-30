class Solution {
    numberOfPaths(x, y) {
        const MOD = 1000000007;
        
        const n = x + y;
        const k = Math.min(x, y);

        // dp[j] = C(currentRow, j)
        const dp = new Array(k + 1).fill(0);
        dp[0] = 1;

        for (let i = 1; i <= n; i++) {
            for (let j = Math.min(i, k); j >= 1; j--) {
                dp[j] = (dp[j] + dp[j - 1]) % MOD;
            }
        }

        return dp[k];
    }
}