
    function findPeakGrid(mat) {
        // code here 
    const n = mat.length;
    const m = mat[0].length;

    let low = 0, high = m - 1;
    
    let mini = -1000000000;

    // binary search on columns
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // find the row with the maximum element in 
        // the current column
        let maxRow = 0;
        for (let i = 1; i < n; ++i) {
            if (mat[i][mid] > mat[maxRow][mid])
                maxRow = i;
        }

        // get the left and right neighbors 
        // treat missing neighbors as -∞
        const left = (mid > 0) ? 
                    mat[maxRow][mid - 1] : mini;
        const right = (mid + 1 < m) ? 
                    mat[maxRow][mid + 1] : mini;

        // check if the current element is greater than or 
        // equal to its neighbors
        if (mat[maxRow][mid] >= left && 
                    mat[maxRow][mid] >= right)
            return [maxRow, mid];

        // if right neighbor is greater, move to right half
        else if (right > mat[maxRow][mid])
            low = mid + 1;

        // else, move to left half
        else
            high = mid - 1;
    }

    return false;
}
 

// Driver Code
const mat = [
    [10, 20, 15],
    [21, 30, 14],
    [7, 16, 32]
];

const peak = findPeakGrid(mat);
console.log(peak[0] + " " + peak[1]);