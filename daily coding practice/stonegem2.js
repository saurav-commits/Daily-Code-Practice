/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;

    // suffix[i] = sum of piles from i to n-1
    const suffix = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + piles[i];
    }

    // dp[i][M]
    const dp = Array.from(
        { length: n },
        () => new Array(n + 1).fill(0)
    );

    // Process from the end towards the beginning
    for (let i = n - 1; i >= 0; i--) {
        for (let M = 1; M <= n; M++) {

            // Can take all remaining piles
            if (i + 2 * M >= n) {
                dp[i][M] = suffix[i];
                continue;
            }

            let best = 0;

            // Try taking X piles
            for (let X = 1; X <= 2 * M && i + X <= n; X++) {
                const nextM = Math.max(M, X);

                const opponent = dp[i + X][nextM];

                // Total remaining stones - opponent's best
                const current = suffix[i] - opponent;

                best = Math.max(best, current);
            }

            dp[i][M] = best;
        }
    }

    return dp[0][1];
};