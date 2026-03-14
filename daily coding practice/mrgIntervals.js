// Given an array of Intervals arr[][], where arr[i] = [starti, endi]. The task is to merge all of the overlapping Intervals.

// Examples:

// Input: arr[][] = [[1, 3], [2, 4], [6, 8], [9, 10]]
// Output: [[1, 4], [6, 8], [9, 10]]
// Explanation: In the given intervals we have only two overlapping intervals here, [1, 3] and [2, 4] which on merging will become [1, 4]. Therefore we will return [[1, 4], [6, 8], [9, 10]].
// Input: arr[][] = [[6, 8], [1, 9], [2, 4], [4, 7]]
// Output: [[1, 9]]
// Explanation: In the given intervals all the intervals overlap with the interval [1, 9]. Therefore we will return [1, 9].
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ starti ≤ endi ≤ 106

function mergeIntervals(arr) {
            if (arr.length === 0) return [];

    // 1. Sort intervals by starting time
    arr.sort((a, b) => a[0] - b[0]);

    const merged = [];
    merged.push(arr[0]);

    // 2. Merge overlapping intervals
    for (let i = 1; i < arr.length; i++) {
        const [currStart, currEnd] = arr[i];
        const lastMerged = merged[merged.length - 1];

        // If overlapping
        if (currStart <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], currEnd);
        } 
        // If not overlapping
        else {
            merged.push(arr[i]);
        }
    }

    return merged;
}
// Example usage:
console.log(mergeIntervals([[1, 3], [2, 4], [6, 8], [9, 10]])); // Output: [[1, 4], [6, 8], [9, 10]]
console.log(mergeIntervals([[6, 8], [1, 9], [2, 4], [4, 7]])); // Output: [[1, 9]]

