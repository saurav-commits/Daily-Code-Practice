class Solution {
    largestUnblockedArea(n, m, arr) {
        const rows = [];
        const cols = [];

        for (const [r, c] of arr) {
            rows.push(r);
            cols.push(c);
        }

        rows.sort((a, b) => a - b);
        cols.sort((a, b) => a - b);

        const maxRows = this.getMaxGap(rows, n);
        const maxCols = this.getMaxGap(cols, m);

        return maxRows * maxCols;
    }

    getMaxGap(blocked, limit) {
        if (blocked.length === 0) return limit;

        let prev = 0;
        let maxGap = 0;

        for (const x of blocked) {
            maxGap = Math.max(maxGap, x - prev - 1);
            prev = x;
        }

        maxGap = Math.max(maxGap, limit - prev);

        return maxGap;
    }
}