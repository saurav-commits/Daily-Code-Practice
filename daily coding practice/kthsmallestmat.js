// Given a matrix mat[][] of size n*n, where each row and column is sorted in non-decreasing order. Find the kth smallest element in the matrix.

// Examples:
// Input: mat[][] = [[16, 28, 60, 64], k = 3
//                 [22, 41, 63, 91],
//                 [27, 50, 87, 93],
//                 [36, 78, 87, 94]]
// Output: 27
// Explanation: 27 is the 3rd smallest element.
// Input: mat[][] = [[10, 20, 30, 40], k = 7
//                 [15, 25, 35, 45],
//                 [24, 29, 37, 48],
//                 [32, 33, 39, 50]] 
// Output: 30
// Explanation: 30 is the 7th smallest element.
// Constraints:
// 1 ≤ n ≤ 500
// 1 ≤ mat[i][j] ≤ 104
// 1 ≤ k ≤ n*n

class Solution {

kthSmallest(mat, k) {
        // code here
         let n=mat.length;
        let low = mat[0][0];
        let high = mat[n - 1][n - 1];

        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            let count = this.countLessEqual(mat, n, mid);

            if (count < k) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }
    countLessEqual(mat, n, mid) {
        let count = 0;
        let row = n - 1;
        let col = 0;

        while (row >= 0 && col < n) {
            if (mat[row][col] <= mid) {
                count += (row + 1);
                col++;
            } else {
                row--;
            }
        }

        return count;
    }
}

const mat =[[10, 20, 30, 40],
                [15, 25, 35, 45],
                [24, 29, 37, 48],
                [32, 33, 39, 50]];
const  k = 7;
let output = new Solution();
console.log(output.kthSmallest(mat, k));