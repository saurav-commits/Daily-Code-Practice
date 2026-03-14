let mat = [[1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]];

let n = mat.length;
for (let i = 0; i < n; i++) {
    [mat[i][i], mat[i][n - 1 - i]] = [mat[i][n - 1 - i], mat[i][i]];
}
console.log(mat);