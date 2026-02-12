function longestBalancedSubstring(s) {
    const n = s.length;
    let maxLen = 0;

    for (let i = 0; i < n; i++) {

        let freq = new Array(26).fill(0);
        let distinct = 0;
        let maxFreq = 0;

        for (let j = i; j < n; j++) {

            let index = s.charCodeAt(j) - 97;

            if (freq[index] === 0) {
                distinct++;
            }

            freq[index]++;
            maxFreq = Math.max(maxFreq, freq[index]);

            let length = j - i + 1;

            if (length === distinct * maxFreq) {
                maxLen = Math.max(maxLen, length);
            }
        }
    }

    return maxLen;
}


console.log(longestBalancedSubstring("abbac")); // 4
console.log(longestBalancedSubstring("zzabccy")); // 4
console.log(longestBalancedSubstring("aba")); // 2
