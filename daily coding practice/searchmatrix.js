
    function searchMatrix(mat) {   // 👈 rename here
        const rows = mat.length;
        const cols = mat[0].length;

        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < cols; j++) {
                if (mat[i][j] !== mat[i - 1][j - 1]) {
                    return false;
                }
            }
        }
        return true;
    }

const mat = [[6, 7, 8],
                [4, 6, 7],
                [1, 4, 6]];

console.log(searchMatrix(mat));
