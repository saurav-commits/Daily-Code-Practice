function longestCommonSpan(a1, a2) {
    const n = a1.length;
    
    let prefixSum = 0;
    let maxLen = 0;
    const map = new Map(); // stores first occurrence of prefixSum
    
    for (let i = 0; i < n; i++) {
        prefixSum += (a1[i] - a2[i]);
        
        // If prefix sum becomes 0
        if (prefixSum === 0) {
            maxLen = i + 1;
        }
        
        // If prefix sum seen before
        if (map.has(prefixSum)) {
            maxLen = Math.max(maxLen, i - map.get(prefixSum));
        } else {
            map.set(prefixSum, i); // store first occurrence
        }
    }
    
    return maxLen;
}

const a1 = [0, 1, 0, 1, 1, 1, 1], a2 = [1, 1, 1, 1, 1, 0, 1];
console.log(longestCommonSpan(a1,a2));
