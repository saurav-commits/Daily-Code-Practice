function wordExists(mat, word) {
    let n = mat.length;
    let m = mat[0].length;

    function dfs(i, j, idx) {
        if (idx === word.length) return true;

        if (
            i < 0 || i >= n ||
            j < 0 || j >= m ||
            mat[i][j] !== word[idx]
        ) {
            return false;
        }

        // mark visited
        let temp = mat[i][j];
        mat[i][j] = '#';

        // explore all 4 directions
        let found =
            dfs(i + 1, j, idx + 1) ||
            dfs(i - 1, j, idx + 1) ||
            dfs(i, j + 1, idx + 1) ||
            dfs(i, j - 1, idx + 1);

        // backtrack
        mat[i][j] = temp;

        return found;
    }

    // try starting from every cell
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
}


let mat = [
    ['T','E','E'],
    ['S','G','K'],
    ['T','E','L']
];

console.log(wordExists(mat, "GEEK")); // true
