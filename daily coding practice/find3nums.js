function find3Numbers(arr) {
    let n = arr.length;
    if (n < 3) return [];

    let leftMin = Array(n).fill(0);
    let rightMax = Array(n).fill(0);

    // Step 1: leftMin
    leftMin[0] = arr[0];
    for (let i = 1; i < n; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], arr[i]);
    }

    // Step 2: rightMax
    rightMax[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
    }

    // Step 3: find valid triplet
    for (let j = 1; j < n - 1; j++) {
        if (leftMin[j - 1] < arr[j] && arr[j] < rightMax[j + 1]) {
            return [leftMin[j - 1], arr[j], rightMax[j + 1]];
        }
    }

    return [];
}

const arr = [1, 2, 3, 4, 5];
console.log(find3Numbers(arr));