function findExitPoint(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    let i = 0, j = 0;
    let dir = 0; // 0=right, 1=down, 2=left, 3=up

    while (true) {
        if (matrix[i][j] === 1) {
            dir = (dir + 1) % 4;
            matrix[i][j] = 0;
        }

        if (dir === 0) j++;
        else if (dir === 1) i++;
        else if (dir === 2) j--;
        else i--;

        if (i < 0) return [0, j];
        if (j < 0) return [i, 0];
        if (i >= n) return [n - 1, j];
        if (j >= m) return [i, m - 1];
    }
}