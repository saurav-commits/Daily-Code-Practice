// Given an unsorted array arr[] and a 2D array queries[][] of size q, where each query is in the form of [a, b]. For each query, count how many elements in arr[] lie within the range [a, b], i.e., elements satisfying a ≤ x ≤ b.

// Return the results for all queries as a list of integers, where each integer corresponds to the count of elements in the respective query range.

// Examples:

// Input: arr[] = [1, 4, 2, 8, 5], queries[][] = [[1, 4], [3, 6], [0, 10]]
// Output: [3, 2, 5]
// Explanation: Query [1, 4]: Elements in range → [1, 4, 2] → Count = 3
// Query [3, 6]: Elements in range → [4, 5] → Count = 2
// Query [0, 10]: All elements → [1, 4, 2, 8, 5] → Count = 5
// Input: arr[] = [10, 20, 30, 40, 50], queries[][] = [[5, 15], [25, 45], [10, 50]]
// Output: [1, 2, 5]
// Explanation: Query [5, 15]: Elements in range → [10] → Count = 1
// Query [25, 45]: Elements in range → [30, 40] → Count = 2
// Query [10, 50]: Elements in range → [10, 20, 30, 40, 50] → Count = 5
// Constraints:
// 1 ≤ arr.size(), q ≤ 105
// 0 ≤ arr[i] ≤ 106
// 0 ≤ queries[i][0] ≤ queries[i][1] ≤ 106

class Solution {
    cntInRange(arr, queries) {
        // code here
          arr.sort((a, b) => a - b); // preprocessing

        let result = [];

        for (let [a, b] of queries) {
            let left = this.lowerBound(arr, a);
            let right = this.upperBound(arr, b);

            if (left > right) result.push(0);
            else result.push(right - left + 1);
        }

        return result;
    }
    lowerBound(arr, target) {
        let low = 0, high = arr.length - 1;
        let ans = arr.length;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] >= target) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    upperBound(arr, target) {
        let low = 0, high = arr.length - 1;
        let ans = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] <= target) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return ans;
    }
}


const arr = [1, 4, 2, 8, 5];
const queries = [[1, 4], [3, 6], [0, 10]];
let output = new Solution();
console.log(output.cntInRange(arr,queries));