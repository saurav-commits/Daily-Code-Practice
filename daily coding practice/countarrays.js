class Solution {
    countArrays(n, m) {
        // dp[x] = number of valid arrays ending with x
        let dp = new Array(m + 1).fill(1);

        dp[0] = 0;

        for (let len = 2; len <= n; len++) {
            let next = new Array(m + 1).fill(0);

            for (let x = 1; x <= m; x++) {
                for (let y = 1; y <= m; y++) {

                    // x and y can be adjacent
                    if (x % y === 0 || y % x === 0) {
                        next[y] += dp[x];
                    }
                }
            }

            dp = next;
        }

        let ans = 0;

        for (let x = 1; x <= m; x++) {
            ans += dp[x];
        }

        return ans;
    }
}