function happiestTriplet(a, b, c) {
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    c.sort((x, y) => x - y);

    let i = 0, j = 0, k = 0;
    let bestDiff = Infinity;
    let bestSum = Infinity;
    let best = [];

    while (i < a.length && j < b.length && k < c.length) {
        let x = a[i], y = b[j], z = c[k];

        let minVal = Math.min(x, y, z);
        let maxVal = Math.max(x, y, z);
        let diff = maxVal - minVal;
        let sum = x + y + z;

        if (
            diff < bestDiff ||
            (diff === bestDiff && sum < bestSum)
        ) {
            bestDiff = diff;
            bestSum = sum;
            best = [x, y, z];
        }

        // move pointer of minimum element
        if (minVal === x) i++;
        else if (minVal === y) j++;
        else k++;
    }

    // return in decreasing order
    return best.sort((x, y) => y - x);
}


console.log(
  happiestTriplet([5,2,8], [10,7,12], [9,14,6])
);
// [7, 6, 5]

console.log(
  happiestTriplet(
    [15,12,18,9],
    [10,17,13,8],
    [14,16,11,5]
  )
);
// [11, 10, 9]
