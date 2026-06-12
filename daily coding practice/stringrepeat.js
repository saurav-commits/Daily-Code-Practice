class Solution {
    isPossible(s, k) {
        const n = s.length;

        if (n % k !== 0) return false;

        const freq = new Map();
        let maxFreq = 0;

        for (let i = 0; i < n; i += k) {
            const block = s.substring(i, i + k);
            const cnt = (freq.get(block) || 0) + 1;
            freq.set(block, cnt);
            maxFreq = Math.max(maxFreq, cnt);
        }

        const m = n / k;
        return maxFreq >= m - 1;
    }
}