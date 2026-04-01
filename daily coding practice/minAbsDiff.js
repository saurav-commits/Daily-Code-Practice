/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var minAbsDiff = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    
    const rows = m - k + 1;
    const cols = n - k + 1;
    
    // Initialize answer matrix
    const ans = Array.from({ length: rows }, () => new Array(cols).fill(0));
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            
            // Step 1: Collect all values in k x k submatrix
            const values = [];
            for (let r = i; r < i + k; r++) {
                for (let c = j; c < j + k; c++) {
                    values.push(grid[r][c]);
                }
            }
            
            // Step 2: Get unique values and sort them
            const unique = [...new Set(values)].sort((a, b) => a - b);
            
            // Step 3: If only one distinct value → diff is 0
            if (unique.length === 1) {
                ans[i][j] = 0;
                continue;
            }
            
            // Step 4: Find minimum absolute diff between adjacent sorted values
            let minDiff = Infinity;
            for (let x = 1; x < unique.length; x++) {
                minDiff = Math.min(minDiff, unique[x] - unique[x - 1]);
                
                // Early exit: can't get better than 0
                if (minDiff === 0) break;
            }
            
            ans[i][j] = minDiff;
        }
    }
    
    return ans;
};

const grid = [[1,-2,3],[2,3,5]], k = 2;
console.log(minAbsDiff(grid, k));

