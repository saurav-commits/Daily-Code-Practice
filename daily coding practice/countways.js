function countWays(n, k) {
    if (n === 1) return k;

    let same = k;              // for n = 2
    let diff = k * (k - 1);    // for n = 2

    for (let i = 3; i <= n; i++) {
        let newSame = diff;
        let newDiff = (same + diff) * (k - 1);

        same = newSame;
        diff = newDiff;
    }

    return same + diff;
}

const n = 3, k = 2;
console.log(countWays(n,k));
