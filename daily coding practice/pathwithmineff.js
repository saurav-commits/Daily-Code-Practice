/**
 * @param {number[][]} mat
 * @returns {number}
 */

class Solution {
    minCostPath(mat) {
        const n = mat.length;
        const m = mat[0].length;

        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

        // dp[x][y] = minimum possible maximum diff to reach (x,y)
        const dp = Array.from({ length: n }, () => Array(m).fill(Infinity));
        dp[0][0] = 0;

        // Min-heap implementation
        const heap = [];
        
        const push = (item) => {
            heap.push(item);
            let i = heap.length - 1;
            while (i > 0) {
                let parent = Math.floor((i - 1) / 2);
                if (heap[parent][0] <= heap[i][0]) break;
                [heap[parent], heap[i]] = [heap[i], heap[parent]];
                i = parent;
            }
        };

        const pop = () => {
            if (heap.length === 1) return heap.pop();
            const min = heap[0];
            heap[0] = heap.pop();
            let i = 0;
            const n = heap.length;
            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (left < n && heap[left][0] < heap[smallest][0]) smallest = left;
                if (right < n && heap[right][0] < heap[smallest][0]) smallest = right;

                if (smallest === i) break;
                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
            return min;
        };

        push([0, 0, 0]); // [effort, x, y]

        while (heap.length > 0) {
            const [effort, x, y] = pop();

            if (x === n - 1 && y === m - 1) return effort;
            if (effort > dp[x][y]) continue;

            for (let [dx, dy] of dirs) {
                let nx = x + dx;
                let ny = y + dy;

                if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
                    const diff = Math.abs(mat[nx][ny] - mat[x][y]);
                    const newEffort = Math.max(effort, diff);

                    if (newEffort < dp[nx][ny]) {
                        dp[nx][ny] = newEffort;
                        push([newEffort, nx, ny]);
                    }
                }
            }
        }

        return dp[n - 1][m - 1];
    }
}

// Example usage:
const mat = [
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5]
];
const solution = new Solution();
const result = solution.minCostPath(mat);
console.log(result); // Output: 2