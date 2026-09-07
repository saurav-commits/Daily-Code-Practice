/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    const MOD = 1000000007;
    const n = s.length;

    const dp = new Array(n + 1).fill(0);

    // Empty string has one subsequence: ""
    dp[0] = 1;

    // last[c] = dp value from just before the
    // previous occurrence of character c
    const last = new Array(26).fill(0);

    for (let i = 1; i <= n; i++) {
        const c = s.charCodeAt(i - 1) - 97;

        // Normally, every old subsequence can either
        // take or not take the current character.
        dp[i] = (2 * dp[i - 1]) % MOD;

        // Remove duplicates caused by the previous
        // occurrence of this character.
        if (last[c] !== 0) {
            dp[i] = (dp[i] - last[c] + MOD) % MOD;
        }

        // Store the number of subsequences BEFORE
        // this occurrence was processed.
        last[c] = dp[i - 1];
    }

    // Remove the empty subsequence
    return (dp[n] - 1 + MOD) % MOD;
};