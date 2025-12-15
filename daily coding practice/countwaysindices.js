// Given an array arr[], count the number of indices such that deleting the element at that index and shifting all elements after it one position left results in an array where the sum of elements at even indices equals the sum at odd indices.

// Examples:

// Input: arr[] = [2, 1, 6, 4]
// Output: 1
// Explaination: After removing arr[1], the resulting array will be [2, 6, 4] the sums of elements at odd index is arr[1] = 6 and the sum of elements at even index is arr[0] + arr[2] = 6.
// Input: arr[] = [1, 1, 1]
// Output: 3
// Explaination: Removing any element makes the sum of odd and even indexed elements equal.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 104

function countWaysIndices(arr) {
    const n = arr.length;
    let totalEvenSum = 0;
    let totalOddSum = 0;    
    let evenSum = 0;
    let oddSum = 0;
    let count = 0;  
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            totalEvenSum += arr[i];
        } else {
            totalOddSum += arr[i];
        }
    }  
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            totalEvenSum -= arr[i];
        } else {
            totalOddSum -= arr[i];
        }
        if (evenSum + totalOddSum === oddSum + totalEvenSum) {
            count++;
        }
        if (i % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }   
    }
    return count;
}

// Example usage:
console.log(countWaysIndices([2, 1, 6, 4])); // Output: 1
console.log(countWaysIndices([1, 1, 1]));    // Output: 3