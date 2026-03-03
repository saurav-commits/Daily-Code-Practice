function longestSubarray(arr) {
    let left = 0;
    let maxLen = 0;
    const freq = new Map();
    
    for (let right = 0; right < arr.length; right++) {
        freq.set(arr[right], (freq.get(arr[right]) || 0) + 1);
        
        while (freq.size > 2) {
            freq.set(arr[left], freq.get(arr[left]) - 1);
            
            if (freq.get(arr[left]) === 0) {
                freq.delete(arr[left]);
            }
            
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
}
const arr = [3, 1, 2, 2, 2, 2];
console.log(longestSubarray(arr));
