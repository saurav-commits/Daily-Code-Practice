function maxConsecutiveOnes(arr, k) {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;

    for (let right = 0; right < arr.length; right++) {
        if (arr[right] === 0) {
            zeroCount++;
        }

        // shrink window if zero count exceeds k
        while (zeroCount > k) {
            if (arr[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}


console.log(maxConsecutiveOnes([1,0,1], 1)); 
// 3

console.log(maxConsecutiveOnes([1,0,0,1,0,1,0,1], 2)); 
// 5

console.log(maxConsecutiveOnes([1,1], 2)); 
// 2
