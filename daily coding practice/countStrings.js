function countStrings(n) {
    if (n === 1) return 2;
    if (n === 2) return 3;

    let prev2 = 2; // dp[1]
    let prev1 = 3; // dp[2]

    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}

const n = 3;
console.log(countStrings(n));
