var largestSubmatrix = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // Step 1: Build heights
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] += matrix[i - 1][j];
      }
    }
  }

  let maxArea = 0;

  // Step 2 + 3
  for (let i = 0; i < m; i++) {
    // Sort row in descending order
    const row = [...matrix[i]].sort((a, b) => b - a);

    for (let j = 0; j < n; j++) {
      const height = row[j];
      const width = j + 1;
      maxArea = Math.max(maxArea, height * width);
    }
  }

  return maxArea;
};

const matrix = [[1,0,1,0,1]];
console.log(largestSubmatrix(matrix));
