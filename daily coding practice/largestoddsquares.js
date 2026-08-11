/**
 * @param {number[][]} mat
 * @param {number[][]} queries
 * @param {number} k
 * @return {number[]}
 */
function largestOddSquares(mat, queries, k) {
    const n = mat.length;
    const m = mat[0].length;

    // prefix[i][j] = number of 1s in
    // rectangle from (0,0) to (i-1,j-1)
    const prefix = Array.from({ length: n + 1 }, () =>
        new Array(m + 1).fill(0)
    );

    // Build 2D prefix sum
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            prefix[i][j] =
                mat[i - 1][j - 1] +
                prefix[i - 1][j] +
                prefix[i][j - 1] -
                prefix[i - 1][j - 1];
        }
    }

    // Returns number of 1s in rectangle:
    // (r1, c1) -> (r2, c2), inclusive
    function getSum(r1, c1, r2, c2) {
        return (
            prefix[r2 + 1][c2 + 1] -
            prefix[r1][c2 + 1] -
            prefix[r2 + 1][c1] +
            prefix[r1][c1]
        );
    }

    const answer = [];

    for (const [i, j] of queries) {
        // Maximum possible radius without going outside matrix
        const maxRadius = Math.min(
            i,
            j,
            n - 1 - i,
            m - 1 - j
        );

        // Check 1 x 1 square
        if (mat[i][j] > k) {
            answer.push(-1);
            continue;
        }

        let low = 0;
        let high = maxRadius;
        let best = 0;

        // Binary search for maximum valid radius
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            const top = i - mid;
            const bottom = i + mid;
            const left = j - mid;
            const right = j + mid;

            const ones = getSum(top, left, bottom, right);

            if (ones <= k) {
                best = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        answer.push(2 * best + 1);
    }

    return answer;
}