// You are given a sorted array arr[] and a 2D array queries[][], where queries[i] represents a query in the form [l, r, x]. For each query, count how many times the number x appears in the subarray arr[l...r] (inclusive).

// Examples:

// Input: arr[] = [1, 2, 2, 4, 5, 5, 5, 8], queries[][] = [[0, 7, 5], [1, 2, 2], [0, 3, 7]]
// Output: [3, 2, 0]
// Explanation:
// Query [0, 7, 5] → elements from index 0 to 7 are [1, 2, 2, 4, 5, 5, 5, 8].
// Number 5 occurs 3 times.
// Query [1, 2, 2] → subarray is [2, 2], and 2 occurs 2 times.
// Query [0, 3, 7] → subarray is [1, 2, 2, 4], and 7 is not present.
// Input: arr[] = [1, 3, 3, 3, 6, 7, 8], queries[][] = [[0, 3, 3], [4, 6, 3], [1, 5, 6]]
// Output: [3, 0, 1]
// Explanation:
// Query [0, 3, 3] → subarray [1, 3, 3, 3], and 3 appears 3 times.
// Query [4, 6, 3] → subarray [6, 7, 8], 3 not found.
// Query [1, 5, 6] → subarray [3, 3, 3, 6, 7], and 6 occurs 1 time.
// Constraints:
// 1 ≤ arr.size(), queries.size() ≤ 105
// 1 ≤ arr[i], x ≤ 106
// 0 ≤ l ≤ r < arr.size()


class Solution {
    countOccurrences(arr, queries) {
        const n = arr.length;
        let result = [];

        for (let [l, r, x] of queries) {
            let left = this.lowerBound(arr, x, l);
            let right = this.upperBound(arr, x, r);

            if (left === -1 || right === -1 || left > right) {
                result.push(0);
            } else {
                result.push(right - left + 1);
            }
        }

        return result;
    }

    // First index >= x and >= l
    lowerBound(arr, x, l) {
        let low = l, high = arr.length - 1;
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] >= x) {
                if (arr[mid] === x) ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    // Last index <= x and <= r
    upperBound(arr, x, r) {
        let low = 0, high = r;
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] <= x) {
                if (arr[mid] === x) ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return ans;
    }
}

const arr = [1, 2, 2, 4, 5, 5, 5, 8];
const queries = [
    [0, 7, 5],
    [1, 2, 2],
    [0, 3, 7]
];

const sol = new Solution();   // create object
const output = sol.countOccurrences(arr, queries);

console.log(output);

