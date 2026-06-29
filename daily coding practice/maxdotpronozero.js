class Solution {
    maxDotProduct(a, b) {
        const n = a.length;
        const m = b.length;

        let prev = new Array(m + 1).fill(Number.NEGATIVE_INFINITY);
        prev[0] = 0;

        for (let i = 1; i <= n; i++) {
            let curr = new Array(m + 1).fill(Number.NEGATIVE_INFINITY);
            curr[0] = 0;

            for (let j = 1; j <= Math.min(i, m); j++) {
                let skip = prev[j];
                let take = prev[j - 1] + a[i - 1] * b[j - 1];
                curr[j] = Math.max(skip, take);
            }

            prev = curr;
        }

        return prev[m];
    }
}