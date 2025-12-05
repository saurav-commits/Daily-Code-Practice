 function minCost(costs) {
        // your code goes here
        const n = costs.length;
    if (n === 0) return 0;

    const k = costs[0].length;
    if (k === 0) return -1;

    // If only 1 color and more than 1 wall → impossible
    if (k === 1) return n === 1 ? costs[0][0] : -1;

    let dp = [...costs[0]]; // initialize with first row

    for (let i = 1; i < n; i++) {
        let min1 = Infinity, min2 = Infinity, idx1 = -1;

        // Find smallest and second smallest values
        for (let c = 0; c < k; c++) {
            if (dp[c] < min1) {
                min2 = min1;
                min1 = dp[c];
                idx1 = c;
            } else if (dp[c] < min2) {
                min2 = dp[c];
            }
        }

        let newDP = new Array(k);

        for (let c = 0; c < k; c++) {
            if (c === idx1) {
                // Can't use same color as previous wall's minimum
                newDP[c] = costs[i][c] + min2;
            } else {
                newDP[c] = costs[i][c] + min1;
            }
        }

        dp = newDP;
    }

    return Math.min(...dp);
    }

    console.log(minCost([[1,2,3],[1,2,3],[3,3,1]])); // Expected output: 3