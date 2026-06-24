class Solution {
    ratInMaze(mat) {
        const n = mat.length;

        if (mat[0][0] === 0) return [[-1]];

        const path = Array.from({ length: n }, () => Array(n).fill(0));
        const memo = Array.from({ length: n }, () => Array(n).fill(0));

        const dfs = (r, c) => {
            if (r >= n || c >= n || mat[r][c] === 0) return false;

            if (r === n - 1 && c === n - 1) {
                path[r][c] = 1;
                return true;
            }

            if (memo[r][c] === -1) return false;

            path[r][c] = 1;

            const jumpLimit = mat[r][c];

            // Smaller jumps first
            for (let jump = 1; jump <= jumpLimit; jump++) {

                // Right first
                if (c + jump < n && dfs(r, c + jump)) {
                    return true;
                }

                // Then Down
                if (r + jump < n && dfs(r + jump, c)) {
                    return true;
                }
            }

            path[r][c] = 0;
            memo[r][c] = -1;

            return false;
        };

        return dfs(0, 0) ? path : [[-1]];
    }
}