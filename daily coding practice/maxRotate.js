function maxRotateSum(arr) {
    let n = arr.length;

    let arrSum = 0;
    let currVal = 0;

    // Step 1: compute arrSum and R0
    for (let i = 0; i < n; i++) {
        arrSum += arr[i];
        currVal += i * arr[i];
    }

    let maxVal = currVal;

    // Step 2: compute subsequent values using formula
    for (let i = 1; i < n; i++) {
        currVal = currVal + arrSum - n * arr[n - i];
        maxVal = Math.max(maxVal, currVal);
    }

    return maxVal;
}


console.log(maxRotateSum([3, 1, 2, 8])); // 29
console.log(maxRotateSum([1, 2, 3]));    // 8
console.log(maxRotateSum([4, 13]));      // 13
