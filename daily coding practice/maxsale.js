/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {
    const n = items.length;

    // cnt[f] = number of items with factor f
    const cnt = new Int32Array(n + 1);
    let pm = Infinity;
    for (const [f, p] of items) {
        cnt[f]++;
        if (p < pm) pm = p;
    }

    // S[f] = number of items whose factor is a multiple of f
    const S = new Int32Array(n + 1);
    for (let f = 1; f <= n; f++) {
        let s = 0;
        for (let m = f; m <= n; m += f) s += cnt[m];
        S[f] = s;
    }

    // items with d > 0, sorted by price
    const arr = [];
    for (const [f, p] of items) {
        const d = S[f] - 1;
        if (d > 0) arr.push([p, d]);
    }
    arr.sort((a, b) => a[0] - b[0]);

    let R = budget;
    let T = 0;
    for (const [p, d] of arr) {
        if (p >= 2 * pm) break;
        const take = Math.min(d, Math.floor(R / p));
        T += take;
        R -= take * p;
        if (take < d) break; // can't afford any later (pricier) group
    }

    return 2 * T + Math.floor(R / pm);
};