function maxOfSubarrays(arr, k) {
    let n = arr.length;
    let result = [];
    let deque = []; // will store indices

    for (let i = 0; i < n; i++) {

        // Remove elements out of this window
        while (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // Remove smaller elements from back
        while (deque.length && arr[deque[deque.length - 1]] <= arr[i]) {
            deque.pop();
        }

        // Add current index
        deque.push(i);

        // Window is ready
        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }

    return result;
}


console.log(maxOfSubarrays([1,2,3,1,4,5,2,3,6], 3));
// [3, 3, 4, 5, 5, 5, 6]

console.log(maxOfSubarrays([5,1,3,4,2], 1));
// [5, 1, 3, 4, 2]
