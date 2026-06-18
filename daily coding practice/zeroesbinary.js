class Solution {
    findCoverage(mat) {
        const n = mat.length;
        const m = mat[0].length;

        const left = Array.from({ length: n }, () => Array(m).fill(false));
        const right = Array.from({ length: n }, () => Array(m).fill(false));
        const up = Array.from({ length: n }, () => Array(m).fill(false));
        const down = Array.from({ length: n }, () => Array(m).fill(false));

        // Left
        for (let i = 0; i < n; i++) {
            let seen = false;
            for (let j = 0; j < m; j++) {
                left[i][j] = seen;
                if (mat[i][j] === 1) seen = true;
            }
        }

        // Right
        for (let i = 0; i < n; i++) {
            let seen = false;
            for (let j = m - 1; j >= 0; j--) {
                right[i][j] = seen;
                if (mat[i][j] === 1) seen = true;
            }
        }

        // Up
        for (let j = 0; j < m; j++) {
            let seen = false;
            for (let i = 0; i < n; i++) {
                up[i][j] = seen;
                if (mat[i][j] === 1) seen = true;
            }
        }

        // Down
        for (let j = 0; j < m; j++) {
            let seen = false;
            for (let i = n - 1; i >= 0; i--) {
                down[i][j] = seen;
                if (mat[i][j] === 1) seen = true;
            }
        }

        let ans = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === 0) {
                    if (left[i][j]) ans++;
                    if (right[i][j]) ans++;
                    if (up[i][j]) ans++;
                    if (down[i][j]) ans++;
                }
            }
        }

        return ans;
    }
}