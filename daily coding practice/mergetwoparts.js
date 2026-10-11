class Solution {
    mergeSortedParts(arr) {
        const n = arr.length;

        // Find the break point
        let breakPoint = n;

        for (let i = 1; i < n; i++) {
            if (arr[i] < arr[i - 1]) {
                breakPoint = i;
                break;
            }
        }

        // Already sorted
        if (breakPoint === n) {
            return arr;
        }

        const left = arr.slice(0, breakPoint);
        const right = arr.slice(breakPoint);

        // Merge two sorted arrays
        let i = 0;
        let j = 0;
        let k = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }

        while (i < left.length) {
            arr[k++] = left[i++];
        }

        while (j < right.length) {
            arr[k++] = right[j++];
        }

        return arr;
    }
}