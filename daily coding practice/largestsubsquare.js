/**
 * @param {string[][]} mat
 * @return {number}
 */
function largestSubsquare(mat) {
  const n = mat.length;
  if (n === 0) return 0;

  // right[i][j]: consecutive 'X' starting at (i,j) going right
  // down[i][j]:  consecutive 'X' starting at (i,j) going down
  const right = Array.from({ length: n }, () => new Int32Array(n));
  const down = Array.from({ length: n }, () => new Int32Array(n));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (mat[i][j] === 'X') {
        right[i][j] = (j + 1 < n ? right[i][j + 1] : 0) + 1;
        down[i][j] = (i + 1 < n ? down[i + 1][j] : 0) + 1;
      }
    }
  }

  let best = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] !== 'X') continue;

      const maxK = Math.min(right[i][j], down[i][j]);
      for (let k = maxK; k > best; k--) {
        // bottom edge and right edge must also have k consecutive X's
        if (right[i + k - 1][j] >= k && down[i][j + k - 1] >= k) {
          best = k;
          break;
        }
      }
    }
  }

  return best;
}

// Examples
console.log(largestSubsquare([
  ['X','X','X','O'],
  ['X','O','X','X'],
  ['X','X','X','O'],
  ['X','O','X','X']
])); // 3

console.log(largestSubsquare([
  ['X','X'],
  ['X','X']
])); // 2