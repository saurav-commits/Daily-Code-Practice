class Solution {
    optimalKeys(n) {
        const dp = new Array(n + 1).fill(0);

        for (let i = 1; i <= n; i++) {
            // Press 'A' every time
            dp[i] = i;

            // Try all possible breakpoints
            for (let j = 1; j <= i - 3; j++) {
                dp[i] = Math.max(
                    dp[i],
                    dp[j] * (i - j - 1)
                );
            }
        }

        return dp[n];
    }
}