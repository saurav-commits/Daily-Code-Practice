function findRotationCount(arr) {
    let low = 0, high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > arr[high]) {
            // Minimum is in right half
            low = mid + 1;
        } else {
            // Minimum is in left half (including mid)
            high = mid;
        }
    }

    // low == index of minimum element
    return low;
}

console.log(findRotationCount([5, 1, 2, 3, 4])); // 1
console.log(findRotationCount([1, 2, 3, 4, 5])); // 0
console.log(findRotationCount([6, 9, 2, 4]));    // 2
