function maxProductPath(grid) {
  const MOD = 1e9 + 7;
  const m = grid.length;
  const n = grid[0].length;

  let maxDp = Array.from({ length: m }, () => Array(n).fill(0));
  let minDp = Array.from({ length: m }, () => Array(n).fill(0));

  maxDp[0][0] = grid[0][0];
  minDp[0][0] = grid[0][0];

  // First column
  for (let i = 1; i < m; i++) {
    maxDp[i][0] = maxDp[i - 1][0] * grid[i][0];
    minDp[i][0] = maxDp[i][0];
  }

  // First row
  for (let j = 1; j < n; j++) {
    maxDp[0][j] = maxDp[0][j - 1] * grid[0][j];
    minDp[0][j] = maxDp[0][j];
  }

  // Fill DP
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      let val = grid[i][j];

      let candidates = [
        maxDp[i - 1][j] * val,
        minDp[i - 1][j] * val,
        maxDp[i][j - 1] * val,
        minDp[i][j - 1] * val
      ];

      maxDp[i][j] = Math.max(...candidates);
      minDp[i][j] = Math.min(...candidates);
    }
  }

  let result = maxDp[m - 1][n - 1];

  if (result < 0) return -1;
  return result % MOD;
}

const grid = [[-1,-2,-3],[-2,-3,-3],[-3,-3,-2]];
console.log(maxProductPath(grid));

