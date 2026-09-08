function searchWord(mat, word) {
    const n = mat.length;
    const m = mat[0].length;

    // 8 possible directions
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [ 0, -1],           [ 0, 1],
        [ 1, -1], [ 1, 0], [ 1, 1]
    ];

    const result = [];

    function isValid(r, c) {
        return r >= 0 && r < n && c >= 0 && c < m;
    }

    function check(r, c, dr, dc) {
        for (let k = 0; k < word.length; k++) {
            const nr = r + k * dr;
            const nc = c + k * dc;

            if (!isValid(nr, nc) || mat[nr][nc] !== word[k]) {
                return false;
            }
        }

        return true;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {

            // First character must match
            if (mat[i][j] !== word[0]) {
                continue;
            }

            // Try all 8 directions
            for (const [dr, dc] of directions) {
                if (check(i, j, dr, dc)) {
                    result.push([i, j]);
                    break; // avoid duplicate starting position
                }
            }
        }
    }

    return result;
}