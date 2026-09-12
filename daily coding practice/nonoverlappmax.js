/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function(intervals) {
    const n = intervals.length;

    // indices sorted by right endpoint (stable sort keeps relative order on ties)
    const order = Array.from({ length: n }, (_, i) => i);
    order.sort((a, b) => intervals[a][1] - intervals[b][1]);

    const rList = order.map(i => intervals[i][1]);

    // binary search: count of elements in rList[0..hi) strictly less than target
    function countLess(target, hi) {
        let lo = 0, high = hi;
        while (lo < high) {
            const mid = (lo + high) >> 1;
            if (rList[mid] < target) lo = mid + 1;
            else high = mid;
        }
        return lo;
    }

    // compare two index lists lexicographically: returns true if a < b
    function lexLess(a, b) {
        const len = Math.min(a.length, b.length);
        for (let i = 0; i < len; i++) {
            if (a[i] !== b[i]) return a[i] < b[i];
        }
        return a.length < b.length;
    }

    function better(cand, best) {
        // true if cand should replace best
        if (cand.score !== best.score) return cand.score > best.score;
        return lexLess(cand.list, best.list);
    }

    // dp[i][k] = { score, list } using first i sorted intervals, at most k chosen
    const dp = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(5);
        for (let k = 0; k <= 4; k++) dp[i][k] = { score: 0, list: [] };
    }

    for (let i = 1; i <= n; i++) {
        const orig = order[i - 1];
        const [l, r, w] = intervals[orig];
        const p = countLess(l, i - 1);

        for (let k = 0; k <= 4; k++) {
            let best = dp[i - 1][k]; // skip this interval

            if (k >= 1) {
                const prev = dp[p][k - 1];
                const newList = [...prev.list, orig].sort((a, b) => a - b);
                const candidate = { score: prev.score + w, list: newList };
                if (better(candidate, best)) best = candidate;
            }

            dp[i][k] = best;
        }
    }

    return dp[n][4].list;
};