class Fenwick {
    constructor(n) {
        this.bit = new Array(n + 2).fill(0);
    }

    update(idx, val) {
        while (idx < this.bit.length) {
            this.bit[idx] += val;
            idx += idx & -idx;
        }
    }

    query(idx) {
        let sum = 0;
        while (idx > 0) {
            sum += this.bit[idx];
            idx -= idx & -idx;
        }
        return sum;
    }
}

class Solution {
    countSubstring(s) {
        const n = s.length;

        let prefix = new Array(n + 1);
        prefix[0] = 0;

        for (let i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + (s[i] === '1' ? 1 : -1);
        }

        // Coordinate Compression
        const vals = [...new Set(prefix)].sort((a, b) => a - b);
        const rank = new Map();
        for (let i = 0; i < vals.length; i++) {
            rank.set(vals[i], i + 1);
        }

        const bit = new Fenwick(vals.length);

        let ans = 0;

        for (let p of prefix) {
            const idx = rank.get(p);

            // Count previous prefix sums smaller than current
            ans += bit.query(idx - 1);

            // Insert current prefix
            bit.update(idx, 1);
        }

        return ans;
    }
}