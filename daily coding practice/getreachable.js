function getReachablePairs(arr) {
    const n = arr.length + 1;
    const result = [];

    for (let i = 2; i <= n; i++) {
        let current = i;
        let distance = 0;
        const reachable = [];

        while (current !== 1) {
            current = arr[current - 2];
            distance++;

            reachable.push([current, distance]);
        }

        // j must be in increasing order
        reachable.reverse();

        for (const [j, k] of reachable) {
            result.push([i, j, k]);
        }
    }

    return result;
}