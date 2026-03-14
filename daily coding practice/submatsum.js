// Given a 2D integer matrix mat[][] and a list of queries queries[][], your task is to answer a series of submatrix sum queries.

// Each query is represented as a list [r1, c1, r2, c2], where:

// (r1, c1) is the top-left coordinate of the submatrix
// (r2, c2) is the bottom-right coordinate of the submatrix (both inclusive)
// Your task is to return a list of integers, the sum of elements within the specified submatrix for each query.

let mat = [[1, 2, 3, 4],
           [5, 6, 7, 8],
           [9, 10, 11, 12],
           [13, 14, 15, 16]];
let queries = [[1, 1, 2, 2],
               [0, 0, 3, 3],
               [2, 1, 3, 2]];

 function prefixSum2D(mat, queries) {
        // code here
         let rows = mat.length;
  let cols = mat[0].length;

  // Step 1: build prefix sum matrix
  let prefix = Array.from({ length: rows }, () =>
    Array(cols).fill(0)
  );

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      prefix[i][j] =
        mat[i][j]
        + (i > 0 ? prefix[i - 1][j] : 0)
        + (j > 0 ? prefix[i][j - 1] : 0)
        - (i > 0 && j > 0 ? prefix[i - 1][j - 1] : 0);
    }
  }

  // Step 2: answer queries
  let result = [];

  for (let q of queries) {
    let [r1, c1, r2, c2] = q;

    let sum =
      prefix[r2][c2]
      - (r1 > 0 ? prefix[r1 - 1][c2] : 0)
      - (c1 > 0 ? prefix[r2][c1 - 1] : 0)
      + (r1 > 0 && c1 > 0 ? prefix[r1 - 1][c1 - 1] : 0);

    result.push(sum);
  }

  return result;
    }

console.log(prefixSum2D(mat, queries));