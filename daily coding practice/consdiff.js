class Solution {
    maxSumPairWithDifferenceLessThanK(arr, k) {
        const n = arr.length;
        if (n < 2) return 0;

        arr.sort((a, b) => a - b);

        const dp = new Array(n).fill(0);

        dp[0] = 0;

        for (let i = 1; i < n; i++) {
            dp[i] = dp[i - 1];

            if (arr[i] - arr[i - 1] < k) {
                const pairSum = arr[i] + arr[i - 1];

                if (i >= 2) {
                    dp[i] = Math.max(
                        dp[i],
                        pairSum + dp[i - 2]
                    );
                } else {
                    dp[i] = Math.max(dp[i], pairSum);
                }
            }
        }

        return dp[n - 1];
    }
}