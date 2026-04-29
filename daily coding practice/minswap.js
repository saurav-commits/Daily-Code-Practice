function minSwaps(arr) {
    let k = arr.reduce((sum, val) => sum + val, 0);

    if (k === 0) return -1;

    let currOnes = 0;

    // first window
    for (let i = 0; i < k; i++) {
        currOnes += arr[i];
    }

    let maxOnes = currOnes;

    // sliding window
    for (let i = k; i < arr.length; i++) {
        currOnes += arr[i] - arr[i - k];
        maxOnes = Math.max(maxOnes, currOnes);
    }

    return k - maxOnes;
}

console.log(minSwaps([1, 0, 1, 0, 1]));
