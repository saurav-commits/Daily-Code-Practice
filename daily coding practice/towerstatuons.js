class Solution {
    countCoordinates(mat) {
        const n = mat.length;
        const m = mat[0].length;

        const pacific = Array.from({ length: n }, () => Array(m).fill(false));
        const atlantic = Array.from({ length: n }, () => Array(m).fill(false));

        const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

        const bfs = (queue, vis) => {
            let front = 0;

            while (front < queue.length) {
                const [r, c] = queue[front++];

                for (const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        nr < 0 || nr >= n ||
                        nc < 0 || nc >= m ||
                        vis[nr][nc] ||
                        mat[nr][nc] < mat[r][c]
                    ) continue;

                    vis[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        };

        const pQueue = [];
        const qQueue = [];

        // Top row (Station P)
        for (let j = 0; j < m; j++) {
            if (!pacific[0][j]) {
                pacific[0][j] = true;
                pQueue.push([0, j]);
            }
        }

        // Left column (Station P)
        for (let i = 0; i < n; i++) {
            if (!pacific[i][0]) {
                pacific[i][0] = true;
                pQueue.push([i, 0]);
            }
        }

        // Bottom row (Station Q)
        for (let j = 0; j < m; j++) {
            if (!atlantic[n - 1][j]) {
                atlantic[n - 1][j] = true;
                qQueue.push([n - 1, j]);
            }
        }

        // Right column (Station Q)
        for (let i = 0; i < n; i++) {
            if (!atlantic[i][m - 1]) {
                atlantic[i][m - 1] = true;
                qQueue.push([i, m - 1]);
            }
        }

        bfs(pQueue, pacific);
        bfs(qQueue, atlantic);

        let ans = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (pacific[i][j] && atlantic[i][j]) ans++;
            }
        }

        return ans;
    }
}