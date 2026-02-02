function maxCircularSubarraySum(arr) {
    let totalSum = 0;

    let maxSum = arr[0];
    let currMax = 0;

    let minSum = arr[0];
    let currMin = 0;

    for (let num of arr) {
        // Kadane for max subarray
        currMax = Math.max(num, currMax + num);
        maxSum = Math.max(maxSum, currMax);

        // Kadane for min subarray
        currMin = Math.min(num, currMin + num);
        minSum = Math.min(minSum, currMin);

        totalSum += num;
    }

    // If all numbers are negative
    if (maxSum < 0) return maxSum;

    return Math.max(maxSum, totalSum - minSum);
}


console.log(maxCircularSubarraySum([8, -8, 9, -9, 10, -11, 12])); 
// 22

console.log(maxCircularSubarraySum([10, -3, -4, 7, 6, 5, -4, -1]));
// 23

console.log(maxCircularSubarraySum([5, -2, 3, 4]));
// 12

console.log(maxCircularSubarraySum([-3, -2, -5]));
// -2
