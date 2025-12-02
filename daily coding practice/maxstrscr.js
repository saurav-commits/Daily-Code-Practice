function maxScore(s, jumps) {
       const n = s.length;
    const A = [...s].map(c => c.charCodeAt(0));
    const idx = c => c.charCodeAt(0) - 97;

    // adjacency: char -> list of chars allowed
    const adj = Array.from({ length: 26 }, () => []);
    for (let [a, b] of jumps) adj[idx(a)].push(idx(b));

    // prefix sum of all ASCII
    const pref = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) pref[i + 1] = pref[i] + A[i];

    // prefix per-character sums
    const charPref = Array.from({ length: 26 }, () => Array(n + 1).fill(0));
    for (let c = 0; c < 26; c++) {
        const ascii = c + 97;
        const cp = charPref[c];
        for (let i = 0; i < n; i++) {
            cp[i + 1] = cp[i] + (A[i] === ascii ? ascii : 0);
        }
    }

    // dp[i] = best score on landing at i
    const dp = Array(n).fill(-Infinity);
    dp[0] = 0;

    // bestKey[c] = max(dp[i] - (pref[i] - charPref[c][i]))
    const bestKey = Array(26).fill(-Infinity);

    // PROCESS left-to-right
    for (let i = 0; i < n; i++) {
        const ci = idx(s[i]);

        // 1) FIRST: try to USE transitions to reach dp[i]
        const c = ci;
        if (bestKey[c] > -1e18) {
            const val = (pref[i] - charPref[c][i]) + bestKey[c];
            dp[i] = Math.max(dp[i], val);
        }

        if (dp[i] <= -1e18) continue;

        // 2) THEN: now ACTIVATE outgoing transitions from index i

        // Same-character jump
        {
            const val = dp[i] - (pref[i] - charPref[ci][i]);
            bestKey[ci] = Math.max(bestKey[ci], val);
        }

        // Allowed jumps
        for (let nxt of adj[ci]) {
            const val = dp[i] - (pref[i] - charPref[nxt][i]);
            bestKey[nxt] = Math.max(bestKey[nxt], val);
        }
    }

    return Math.max(...dp);
}

// Example usage:
console.log(maxScore("forgfg", [['f', 'r'], ['r', 'g']]));  // → 590