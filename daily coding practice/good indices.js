function countGoodIndices(arr) {
    const n = arr.length;
    const result = new Array(n).fill(0);
    // 0 = unknown, 1 = good, -1 = bad

    for (let i = 0; i < n; i++) {
        if (result[i] !== 0) continue;

        let path = [];
        let current = i;
        const seen = new Set();

        while (current >= 0 && current < n &&
               result[current] === 0 &&
               !seen.has(current) &&
               arr[current] !== 0) {
            seen.add(current);
            path.push(current);
            current += arr[current];
        }

        let isGood;

        if (current < 0 || current >= n) {
            isGood = true;
        } else if (result[current] !== 0) {
            isGood = result[current] === 1;
        } else {
            // Repeated index or zero jump means bad
            isGood = false;
        }

        for (let j = path.length - 1; j >= 0; j--) {
            result[path[j]] = isGood ? 1 : -1;
        }
    }

    return result.filter(value => value === 1).length;
}