class Solution {
    longestPath(mat, xs, ys, xd, yd) {
        const n = mat.length;
        const m = mat[0].length;

        if (mat[xs][ys] === 0 || mat[xd][yd] === 0) return -1;

        const vis = Array.from({ length: n }, () => Array(m).fill(false));

        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];

        const dfs = (x, y) => {
            if (x === xd && y === yd) return 0;

            vis[x][y] = true;
            let ans = -1;

            for (let k = 0; k < 4; k++) {
                const nx = x + dx[k];
                const ny = y + dy[k];

                if (
                    nx >= 0 && nx < n &&
                    ny >= 0 && ny < m &&
                    mat[nx][ny] === 1 &&
                    !vis[nx][ny]
                ) {
                    const res = dfs(nx, ny);
                    if (res !== -1) {
                        ans = Math.max(ans, res + 1);
                    }
                }
            }

            vis[x][y] = false; // Backtrack
            return ans;
        };

        return dfs(xs, ys);
    }
}