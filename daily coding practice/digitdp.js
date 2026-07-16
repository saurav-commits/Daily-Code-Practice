class Solution {
    countWays(n, sum) {
        if (sum > 9 * n) return -1;

        const dp = Array.from({ length: n + 1 }, () =>
            Array(sum + 1).fill(-1)
        );

        function solve(pos, remSum) {
            if (remSum < 0) return 0;
            if (pos === n) return remSum === 0 ? 1 : 0;

            if (dp[pos][remSum] !== -1) return dp[pos][remSum];

            let ans = 0;
            for (let digit = 0; digit <= 9; digit++) {
                ans += solve(pos + 1, remSum - digit);
            }

            return (dp[pos][remSum] = ans);
        }

        let ans = 0;

        // First digit cannot be 0
        for (let digit = 1; digit <= 9; digit++) {
            if (sum >= digit) {
                ans += solve(1, sum - digit);
            }
        }

        return ans === 0 ? -1 : ans;
    }
}