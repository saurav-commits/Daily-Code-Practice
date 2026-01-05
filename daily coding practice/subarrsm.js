 function maxSubarraySum(arr, k) {
    
    let n = arr.length;
    if (n < k) return null;

    let windowSum = 0;

    // Step 1: sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    // Step 2: slide the window
    for (let i = k; i < n; i++) {
        windowSum += arr[i];       // add next element
        windowSum -= arr[i - k];   // remove left element
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const k=4;
console.log(maxSubarraySum(arr,k));
