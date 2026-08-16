function minProduct(arr) {
    const n = arr.length;
    let minProd = Infinity;

    // Generate every non-empty subset
    for (let mask = 1; mask < (1 << n); mask++) {
        let product = 1;

        for (let i = 0; i < n; i++) {
            // If i-th element is included
            if (mask & (1 << i)) {
                product *= arr[i];
            }
        }

        minProd = Math.min(minProd, product);
    }

    return minProd;
}