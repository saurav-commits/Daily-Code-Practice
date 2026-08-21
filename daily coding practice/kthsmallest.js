/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function(coins, k) {
    const n = coins.length;

    function gcd(a, b) {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    function lcm(a, b) {
        return (a / gcd(a, b)) * b;
    }

    // Precompute LCM and sign for every non-empty subset, using BigInt to avoid overflow
    const subsetLcm = [];
    const subsetSign = [];
    const CAP = 2n * 10n ** 15n;

    for (let mask = 1; mask < (1 << n); mask++) {
        let curLcm = 1n;
        let bits = 0;
        let overflow = false;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                bits++;
                const c = BigInt(coins[i]);
                const g = gcd(curLcm, c);
                curLcm = (curLcm / g) * c;
                if (curLcm > CAP) {
                    overflow = true;
                    break;
                }
            }
        }
        subsetLcm.push(overflow ? null : curLcm);
        subsetSign.push(bits % 2 === 1 ? 1n : -1n);
    }

    function countLE(x) {
        let total = 0n;
        for (let idx = 0; idx < subsetLcm.length; idx++) {
            const l = subsetLcm[idx];
            if (l === null || l > x) continue;
            total += subsetSign[idx] * (x / l);
        }
        return total;
    }

    const K = BigInt(k);
    let lo = 1n;
    let hi = BigInt(Math.min(...coins)) * K;

    while (lo < hi) {
        const mid = (lo + hi) / 2n;
        if (countLE(mid) >= K) {
            hi = mid;
        } else {
            lo = mid + 1n;
        }
    }

    return Number(lo);
};