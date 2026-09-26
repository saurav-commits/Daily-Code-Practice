function minCostPizza(x, s, m, l, cs, cm, cl) {
    const dp = new Array(x + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= x; i++) {
        dp[i] = Math.min(
            dp[Math.max(0, i - s)] + cs,
            dp[Math.max(0, i - m)] + cm,
            dp[Math.max(0, i - l)] + cl
        );
    }

    return dp[x];
}

// Examples
console.log(minCostPizza(16, 3, 6, 9, 50, 150, 300)); // 300
console.log(minCostPizza(10, 1, 3, 10, 10, 20, 50));  // 50