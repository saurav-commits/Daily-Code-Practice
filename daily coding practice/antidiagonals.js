function antiDiagonals(mat) {
    let n = mat.length;
    let result = [];

    for (let sum = 0; sum <= 2 * (n - 1); sum++) {
        for (let i = 0; i < n; i++) {
            let j = sum - i;

            if (j >= 0 && j < n) {
                result.push(mat[i][j]);
            }
        }
    }

    return result;
}

const mat = [[1,2,3],[4,5,6],[7,8,9]];
console.log(antiDiagonals(mat));