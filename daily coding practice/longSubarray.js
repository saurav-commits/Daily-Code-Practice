function longestSubarray(arr, k) {
    const n = arr.length;
    
    // Step 1: Convert to +1 / -1
    let prefix = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + (arr[i] > k ? 1 : -1);
    }
    
    // Step 2: Build decreasing stack of indices
    let stack = [];
    for (let i = 0; i <= n; i++) {
        if (stack.length === 0 || prefix[i] < prefix[stack[stack.length - 1]]) {
            stack.push(i);
        }
    }
    
    // Step 3: Traverse from right to left
    let maxLen = 0;
    
    for (let j = n; j >= 0; j--) {
        while (stack.length && prefix[j] > prefix[stack[stack.length - 1]]) {
            maxLen = Math.max(maxLen, j - stack.pop());
        }
    }
    
    return maxLen;
}

const arr = [1,2,3,4,1], k=2;

console.log(longestSubarray(arr,k));
