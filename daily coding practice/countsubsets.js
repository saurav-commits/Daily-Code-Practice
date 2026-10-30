function countSubsets(arr, l, r) {
    const MOD = 1000000007n;
    const n = arr.length;
    const cnt = new Array(n + 2).fill(0);
    for (const x of arr) cnt[x]++;

    const pow2 = new Array(n + 1);
    pow2[0] = 1n;
    for (let i = 1; i <= n; i++) pow2[i] = (pow2[i - 1] * 2n) % MOD;

    let ans = 0n;
    let prod = 1n;   // product of (2^cnt[v] - 1) for v < m
    let seen = 0;    // number of elements with value <= m
    const top = Math.min(r, n + 1);

    for (let m = 0; m <= top; m++) {
        seen += cnt[m];
        if (m >= l) {
            ans = (ans + prod * pow2[n - seen]) % MOD;
        }
        // cnt[m] <= n, so pow2 index is always valid
        prod = (prod * ((pow2[cnt[m]] - 1n + MOD) % MOD)) % MOD;
        if (prod === 0n) break;
    }

    return Number(ans);
}