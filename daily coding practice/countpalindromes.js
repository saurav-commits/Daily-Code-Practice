function countPalindromes(n, k) {
    const MOD = 1000000007n;

    let ans = 0n;
    let perm = 1n; // P(k, 0)

    for (let m = 1; m <= k; m++) {
        // P(k, m)
        perm = (perm * BigInt(k - m + 1)) % MOD;

        // Odd length: 2m - 1
        if (2 * m - 1 <= n) {
            ans = (ans + perm) % MOD;
        }

        // Even length: 2m
        if (2 * m <= n) {
            ans = (ans + perm) % MOD;
        }

        // Once both possible lengths exceed n, stop
        if (2 * m - 1 > n) break;
    }

    return Number(ans);
}