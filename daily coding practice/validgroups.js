function validgroups(s) {
    const n = s.length;
        const maxSum = 9 * n;

        const dp = Array.from({ length: n + 1 }, () =>
            Array(maxSum + 1).fill(-1)
        );

        const solve = (idx, prevSum) => {
            if (idx === n) return 1;

            if (dp[idx][prevSum] !== -1) {
                return dp[idx][prevSum];
            }

            let ans = 0;
            let currSum = 0;

            for (let i = idx; i < n; i++) {
                currSum += Number(s[i]);

                if (currSum >= prevSum) {
                    ans += solve(i + 1, currSum);
                }
            }

            return dp[idx][prevSum] = ans;
        };

        return solve(0, 0);
}