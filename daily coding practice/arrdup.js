// Given an array arr[] of size n, containing elements from the range 1 to n, and each element appears at most twice, return an array of all the integers that appears twice.

// Note: You can return the elements in any order but the driver code will print them in sorted order.

// Examples:

// Input: arr[] = [2, 3, 1, 2, 3]
// Output: [2, 3] 
// Explanation: 2 and 3 occur more than once in the given array.
// Input: arr[] = [3, 1, 2] 
// Output: []
// Explanation: There is no repeating element in the array, so the output is empty.
// Constraints:
// 1 ≤ n ≤ 106
// 1 ≤ arr[i] ≤ n

function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();       
    for (const num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }
    return Array.from(duplicates).sort((a, b) => a - b);
}


function findDuplicates2(arr) {
      let result = [];

        for (let i = 0; i < arr.length; i++) {
            let x = Math.abs(arr[i]);
            if (arr[x - 1] < 0) {
                result.push(x);
            } else {
                arr[x - 1] = -arr[x - 1];
            }
        }

        return result;
}

// Example usage:
console.log(findDuplicates([2, 3, 1, 2, 3]));
console.log(findDuplicates2([2, 3, 1, 2, 3]));