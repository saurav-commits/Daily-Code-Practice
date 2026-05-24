class Solution {
    lastCoin(arr) {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            if (arr[left] > arr[right]) {
                left++;
            } else {
                right--;
            }
        }

        return arr[left];
    }
}