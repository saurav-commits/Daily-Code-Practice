function longestKSubstr(s, k) {
    let left = 0;
    let maxLen = -1;
    const freq = new Map();

    for (let right = 0; right < s.length; right++) {
        freq.set(s[right], (freq.get(s[right]) || 0) + 1);

        // shrink window if distinct > k
        while (freq.size > k) {
            freq.set(s[left], freq.get(s[left]) - 1);

            if (freq.get(s[left]) === 0) {
                freq.delete(s[left]);
            }

            left++;
        }

        // update result when exactly k distinct
        if (freq.size === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    return maxLen;
}

const  s = "aabacbebebe", k = 3;
console.log(longestKSubstr(s,k));
