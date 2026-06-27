class Solution {
    countWays(n, m) {
        const MOD = 1000000007;

        const dp = new Array(n + 1).fill(0);

        for (let i = 0; i <= n; i++) {
            if (i < m) {
                dp[i] = 1;
            } else if (i === m) {
                dp[i] = 2;
            } else {
                dp[i] = (dp[i - 1] + dp[i - m]) % MOD;
            }
        }

        return dp[n];
    }
}