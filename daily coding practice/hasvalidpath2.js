/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // A valid parentheses string must have even length
    if ((m + n - 1) % 2 !== 0) {
        return false;
    }

    // Starting with ')' is immediately invalid
    if (grid[0][0] === ')') {
        return false;
    }

    // dp[j] = Set of possible balances at row i, column j
    const dp = Array.from({ length: n }, () => new Set());

    dp[0].add(1);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (i === 0 && j === 0) continue;

            const current = grid[i][j];
            const balanceSet = new Set();

            // From top
            if (i > 0) {
                for (const balance of dp[j]) {
                    const newBalance =
                        current === '(' ? balance + 1 : balance - 1;

                    if (newBalance >= 0) {
                        balanceSet.add(newBalance);
                    }
                }
            }

            // From left
            if (j > 0) {
                for (const balance of dp[j - 1]) {
                    const newBalance =
                        current === '(' ? balance + 1 : balance - 1;

                    if (newBalance >= 0) {
                        balanceSet.add(newBalance);
                    }
                }
            }

            dp[j] = balanceSet;
        }
    }

    return dp[n - 1].has(0);
};