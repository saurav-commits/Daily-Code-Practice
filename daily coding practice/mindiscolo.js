function maxDistance(colors) {
    let n = colors.length;

    let maxDist = 0;

    // Case 1: Fix left (index 0)
    for (let j = n - 1; j >= 0; j--) {
        if (colors[j] !== colors[0]) {
            maxDist = Math.max(maxDist, j);
            break;
        }
    }

    // Case 2: Fix right (index n-1)
    for (let i = 0; i < n; i++) {
        if (colors[i] !== colors[n - 1]) {
            maxDist = Math.max(maxDist, n - 1 - i);
            break;
        }
    }

    return maxDist;
}

// Example usage:
let colors = [1, 1, 1, 6, 1, 1, 1];
console.log(maxDistance(colors)); // Output: 3