// You are given an array arr[] of positive integers and an integer k. You have to count the number of subarrays that contain exactly k odd numbers.

// Examples:

// Input: arr[] = [2, 5, 6, 9], k = 2
// Output: 2
// Explanation: There are 2 subarrays with 2 odds: [2, 5, 6, 9] and [5, 6, 9].


function countSubarrays(arr, k) {
        // code here
         let countMap = new Map();
    countMap.set(0, 1);

    let prefixSum = 0;
    let result = 0;

    for (let num of arr) {
        // Convert to 0 or 1
        prefixSum += (num % 2);

        if (countMap.has(prefixSum - k)) {
            result += countMap.get(prefixSum - k);
        }

        countMap.set(prefixSum, (countMap.get(prefixSum) || 0) + 1);
    }

    return result;
}

const arr=[2,5,6,9];
console.log(countSubarrays(arr,2));
