function maxProductSubarray(arr) {
    let maxProd = arr[0];
    let minProd = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];

        // If current element is negative, swap
        if (curr < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        maxProd = Math.max(curr, curr * maxProd);
        minProd = Math.min(curr, curr * minProd);

        result = Math.max(result, maxProd);
    }

    return result;
}

console.log(maxProductSubarray([-2, 6, -3, -10, 0, 2])); // 180
console.log(maxProductSubarray([-1, -3, -10, 0, 6]));   // 30
console.log(maxProductSubarray([2, 3, 4]));             // 24
console.log(maxProductSubarray([-2]));                  // -2
