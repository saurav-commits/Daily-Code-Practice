class Solution {
    minimumCost(cost, w) {
        const n = cost.length;
        const INF = Number.MAX_SAFE_INTEGER;

        const dp = new Array(w + 1).fill(INF);
        dp[0] = 0;

        for (let i = 1; i <= w; i++) {
            for (let j = 0; j < n; j++) {
                const packetWeight = j + 1;

                if (
                    cost[j] !== -1 &&
                    packetWeight <= i &&
                    dp[i - packetWeight] !== INF
                ) {
                    dp[i] = Math.min(
                        dp[i],
                        dp[i - packetWeight] + cost[j]
                    );
                }
            }
        }

        return dp[w] === INF ? -1 : dp[w];
    }
}