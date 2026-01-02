// Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.
// Note: You need to solve this problem without utilizing the built-in sort function.

// Examples:

// Input: arr[] = [0, 1, 2, 0, 1, 2]
// Output: [0, 0, 1, 1, 2, 2]
// Explanation: 0s, 1s and 2s are segregated into ascending order.
// Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
// Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
// Explanation: 0s, 1s and 2s are segregated into ascending order.
// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

// Constraints:
// 1 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 2

function sort012(arr) {
    let n = arr.length;
    
    // initialize three pointers:
    // lo: boundary for 0s
    // mid: current element being checked
    // hi: boundary for 2s
    let lo = 0;
    let hi = n - 1;
    let mid = 0;
    
    // process elements until mid crosses hi
    while (mid <= hi) {
        if (arr[mid] === 0) {
            
            // current is 0: swap with lo and move both 
            // pointers forward
            [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
            lo++;
            mid++;
        }
        else if (arr[mid] === 1) {
            // current is 1: it's already in correct position
            mid++;
        }
        else {
            // current is 2: swap with hi and move hi backward
            // do not increment mid, as swapped value needs
            // to be re-checked
            [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
            hi--;
        }
    }
}

// Driver Code
let arr = [0, 1, 2, 0, 1, 2];
let n = arr.length;

// sort the array in-place
sort012(arr);

for (let i = 0; i < n; i++)
    process.stdout.write(arr[i] + " ");