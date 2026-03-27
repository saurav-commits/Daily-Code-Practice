function maximumChocolates(grid) {
    const n = grid.length;
    const m = grid[0].length;

    // 3D DP array
    const dp = Array.from({ length: n }, () =>
        Array.from({ length: m }, () =>
            Array(m).fill(-1)
        )
    );

    function solve(i, j1, j2) {
        // Out of bounds
        if (j1 < 0 || j1 >= m || j2 < 0 || j2 >= m) {
            return -Infinity;
        }

        // Last row
        if (i === n - 1) {
            if (j1 === j2) return grid[i][j1];
            return grid[i][j1] + grid[i][j2];
        }

        if (dp[i][j1][j2] !== -1) {
            return dp[i][j1][j2];
        }

        let maxChoco = -Infinity;

        // Try all 9 moves
        for (let dj1 = -1; dj1 <= 1; dj1++) {
            for (let dj2 = -1; dj2 <= 1; dj2++) {

                let value;
                if (j1 === j2) {
                    value = grid[i][j1];
                } else {
                    value = grid[i][j1] + grid[i][j2];
                }

                value += solve(i + 1, j1 + dj1, j2 + dj2);

                maxChoco = Math.max(maxChoco, value);
            }
        }

        return dp[i][j1][j2] = maxChoco;
    }

    return solve(0, 0, m - 1);
}

const grid = [[4, 1, 2], [3, 6, 1], [1, 6, 6], [3, 1, 2]];

console.log(maximumChocolates(grid));
