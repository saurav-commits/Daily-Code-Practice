// Given a sorted array arr[] containing distinct positive integers that has been rotated at some unknown pivot, and a value x. Your task is to count the number of elements in the array that are less than or equal to x.

// Examples:

// Input: arr[] = [4, 5, 8, 1, 3], x = 6
// Output: 4
// Explanation: 1, 3, 4 and 5 are less than 6, so the count of all elements less than 6 is 4.
// Input: arr[] = [6, 10, 12, 15, 2, 4, 5], x = 14
// Output: 6
// Explanation: All elements except 15 are less than 14, so the count of all elements less than 14 is 6.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i], x ≤ 109

// Find index of minimum element

  class Solution {
    countLessEqual(arr, x) {
        // code here
        const n = arr.length;
        const pivot = this.findPivot(arr);

        let count = 0;

        // left sorted part
        count += this.countInSorted(arr, 0, pivot - 1, x);

        // right sorted part
        count += this.countInSorted(arr, pivot, n - 1, x);

        return count;
    }
    
    // Find index of minimum element
    findPivot(arr) {
        let low = 0, high = arr.length - 1;

        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] > arr[high]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }

    // Count elements <= x in sorted subarray
    countInSorted(arr, left, right, x) {
        if (left > right) return 0;

        let low = left, high = right;
        let ans = left - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] <= x) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return ans - left + 1;
    }
}


const arr =[6, 10, 12, 15, 2, 4, 5];
const x=14;
let output = new Solution();
console.log(output.countLessEqual(arr,x));