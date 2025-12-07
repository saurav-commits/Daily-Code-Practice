// Given a string str consisting of lowercase english alphabets, the task is to find the number of distinct subsequences of the string
// Note: Answer can be very large, so, ouput will be answer modulo 109+7.

// Examples:

// Input: str = "gfg"
// Output: 7
// Explanation: 
// The seven distinct subsequences are "", "g", "f", "gf", "fg", "gg" and "gfg" .
// Input: str = "ggg"
// Output: 4
// Explanation: 
// The four distinct subsequences are "", "g", "gg", "ggg".
// Constraints:
// 1 ≤ |str| ≤ 105
// str contains lower case English alphabets

function countDistinctSubsequences(str) {
const MOD = 1000000007;
    const n = str.length;

    // dp[i] = number of distinct subsequences of str[0..i-1]
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // empty subsequence

    // last occurrence (in terms of dp index) for each character
    const last = new Array(26).fill(-1);

    for (let i = 1; i <= n; i++) {
        const ch = str[i - 1];
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);

        // double the subsequences count
        let val = (2 * dp[i - 1]) % MOD;

        // if this character has appeared before, subtract duplicates
        if (last[idx] !== -1) {
            val = (val - dp[last[idx] - 1]) % MOD;
            if (val < 0) val += MOD; // fix negative modulo
        }

        dp[i] = val;
        last[idx] = i; // mark last occurrence (using dp index)
    }

    return dp[n]; // includes the empty subsequence
}

// Example usage:
console.log(countDistinctSubsequences("gfg")); // Expected output: 7
console.log(countDistinctSubsequences("ggg")); // Expected output: 4