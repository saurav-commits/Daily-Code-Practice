

    function maxProfit(x, y, a, b) {
        let n = a.length;

        // Store task indices
        let tasks = [];

        for (let i = 0; i < n; i++) {
            tasks.push(i);
        }

        // Sort by absolute difference descending
        tasks.sort((i, j) => {
            return Math.abs(a[j] - b[j]) - Math.abs(a[i] - b[i]);
        });

        let profit = 0;

        for (let idx of tasks) {

            // Prefer Machine A
            if ((a[idx] >= b[idx] && x > 0) || y === 0) {
                profit += a[idx];
                x--;
            }
            // Prefer Machine B
            else {
                profit += b[idx];
                y--;
            }
        }

        return profit;
    }
