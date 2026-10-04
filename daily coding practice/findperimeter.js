function findPerimeter(mat) {
    const n = mat.length;
    const m = mat[0].length;

    let perimeter = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {

            if (mat[i][j] === 1) {
                // Every 1-cell initially contributes 4
                perimeter += 4;

                // Shared side with cell above
                if (i > 0 && mat[i - 1][j] === 1) {
                    perimeter -= 2;
                }

                // Shared side with cell on the left
                if (j > 0 && mat[i][j - 1] === 1) {
                    perimeter -= 2;
                }
            }
        }
    }

    return perimeter;
}