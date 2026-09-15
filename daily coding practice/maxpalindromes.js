/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
        const n = s.length;

        // pal[l][r] = true if s[l...r] is a palindrome
        const pal = Array.from({ length: n }, () => Array(n).fill(false));

        // Build palindrome table by increasing length
        for (let len = 1; len <= n; len++) {
            for (let l = 0; l + len <= n; l++) {
                let r = l + len - 1;

                if (len === 1) {
                    pal[l][r] = true;
                } 
                else if (len === 2) {
                    pal[l][r] = s[l] === s[r];
                } 
                else {
                    pal[l][r] = s[l] === s[r] && pal[l + 1][r - 1];
                }
            }
        }

        // dp[i] = maximum number of valid palindromes
        // using characters s[0 ... i-1]
        const dp = new Array(n + 1).fill(0);

        for (let i = 1; i <= n; i++) {
            // Don't use s[i-1] as the end of a new palindrome
            dp[i] = dp[i - 1];

            // Try every palindrome ending at i-1
            for (let l = 0; l < i; l++) {
                let len = i - l;

                if (len >= k && pal[l][i - 1]) {
                    dp[i] = Math.max(dp[i], dp[l] + 1);
                }
            }
        }

        return dp[n];
};