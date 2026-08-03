var stoneGameIII = function(stoneValue) {
    const n = stoneValue.length;

    // dp[i] = maximum score difference
    // current player can achieve starting from i
    const dp = new Array(n + 3).fill(0);

    for (let i = n - 1; i >= 0; i--) {

        let sum = 0;
        let best = -Infinity;

        // Take 1, 2, or 3 stones
        for (let j = 0; j < 3 && i + j < n; j++) {

            sum += stoneValue[i + j];

            best = Math.max(
                best,
                sum - dp[i + j + 1]
            );
        }

        dp[i] = best;
    }

    if (dp[0] > 0) return "Alice";
    if (dp[0] < 0) return "Bob";

    return "Tie";
};