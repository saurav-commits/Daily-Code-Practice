function countValidParentheses(n) {
    if (n % 2 !== 0) return 0;

    let k = n / 2;
    let dp = new Array(k + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= k; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 - j];
        }
    }

    return dp[k];
}

console.log(countValidParentheses(2)); // 1
console.log(countValidParentheses(4)); // 2
console.log(countValidParentheses(6)); // 5
console.log(countValidParentheses(3)); // 0
