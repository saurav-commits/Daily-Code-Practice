function subsequenceDigitSum(s) {
    const MOD = 1000000007n;
    let sum = 0n;
    for (const c of s) sum += BigInt(c.charCodeAt(0) - 48);

    // fast modular exponentiation: 2^(n-1) mod MOD
    let p = 1n, base = 2n, e = BigInt(s.length - 1);
    while (e > 0n) {
        if (e & 1n) p = (p * base) % MOD;
        base = (base * base) % MOD;
        e >>= 1n;
    }
    return Number((sum % MOD) * p % MOD);
}

console.log(subsequenceDigitSum("123")); // 24
console.log(subsequenceDigitSum("405")); // 36