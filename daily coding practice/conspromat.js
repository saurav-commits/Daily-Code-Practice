function constructProductMatrix(grid) {
    const MOD = 12345;
    const n = grid.length;
    const m = grid[0].length;

    // Step 1: Flatten
    const arr = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            arr.push(grid[i][j] % MOD);
        }
    }

    const k = arr.length;

    // Step 2: Prefix
    const prefix = new Array(k).fill(1);
    for (let i = 1; i < k; i++) {
        prefix[i] = (prefix[i - 1] * arr[i - 1]) % MOD;
    }

    // Step 3: Suffix
    const suffix = new Array(k).fill(1);
    for (let i = k - 2; i >= 0; i--) {
        suffix[i] = (suffix[i + 1] * arr[i + 1]) % MOD;
    }

    // Step 4: Result
    const result = new Array(k);
    for (let i = 0; i < k; i++) {
        result[i] = (prefix[i] * suffix[i]) % MOD;
    }

    // Step 5: Convert back to 2D
    const ans = [];
    let idx = 0;
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < m; j++) {
            row.push(result[idx++]);
        }
        ans.push(row);
    }

    return ans;
}

const grid = [[1,2],[3,4]];

console.log(constructProductMatrix(grid));
