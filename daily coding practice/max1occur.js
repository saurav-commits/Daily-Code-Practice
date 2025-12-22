// You are given a 2D binary array arr[][] consisting of only 1s and 0s. Each row of the array is sorted in non-decreasing order. Your task is to find and return the index of the first row that contains the maximum number of 1s. If no such row exists, return -1.

// Note:

// The array follows 0-based indexing.
// The number of rows and columns in the array are denoted by n and m respectively.
// Examples:

// Input: arr[][] = [[0,1,1,1], [0,0,1,1], [1,1,1,1], [0,0,0,0]]
// Output: 2
// Explanation: Row 2 contains the most number of 1s (4 1s). Hence, the output is 2.
// Input: arr[][] = [[0,0], [1,1]]
// Output: 1
// Explanation: Row 1 contains the most number of 1s (2 1s). Hence, the output is 1.
// Input: arr[][] = [[0,0], [0,0]]
// Output: -1
// Explanation: No row contains any 1s, so the output is -1.
// Constraints:
// 1 ≤ arr.size(), arr[i].size() ≤ 103
// 0 ≤ arr[i][j] ≤ 1 


class Solution {
    rowWithMax1s(arr) {
        // code here
          let rows = arr.length;
        let cols = arr[0].length;

        let maxOnes = 0;
        let ansRow = -1;

        for (let i = 0; i < rows; i++) {
            let firstOne = this.firstOneIndex(arr[i], cols);
            if (firstOne !== -1) {
                let onesCount = cols - firstOne;
                if (onesCount > maxOnes) {
                    maxOnes = onesCount;
                    ansRow = i;
                }
            }
        }

        return ansRow;
        
    }
    firstOneIndex(row, cols) {
        let low = 0, high = cols - 1;
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (row[mid] === 1) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}

const arr = [
 [0,1,1,1],
 [0,0,1,1],
 [1,1,1,1],
 [0,0,0,0]
];
let output = new Solution();
console.log(output.rowWithMax1s(arr));
