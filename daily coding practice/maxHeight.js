function maxHeight(r, h) {
    const n = r.length;

    const discs = [];

    for (let i = 0; i < n; i++) {
        discs.push([r[i], h[i]]);
    }

    discs.sort((a, b) => a[0] - b[0]);

    // Fenwick tree
    const bit = new Array(1001).fill(0);

    function query(index) {
        let ans = 0;

        while (index > 0) {
            ans = Math.max(ans, bit[index]);
            index -= index & -index;
        }

        return ans;
    }

    function update(index, value) {
        while (index <= 1000) {
            bit[index] = Math.max(bit[index], value);
            index += index & -index;
        }
    }

    let ans = 0;
    let i = 0;

    while (i < n) {
        let j = i;

        // Same radius must be processed together
        while (j < n && discs[j][0] === discs[i][0]) {
            j++;
        }

        const updates = [];

        // Query first
        for (let k = i; k < j; k++) {
            const height = discs[k][1];

            // height must be strictly smaller
            const best = query(height - 1);

            const current = best + height;

            ans = Math.max(ans, current);

            updates.push([height, current]);
        }

        // Update after all same-radius discs are processed
        for (const [height, value] of updates) {
            update(height, value);
        }

        i = j;
    }

    return ans;
}