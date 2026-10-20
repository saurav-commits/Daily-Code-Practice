
function lexicographicallyLargest(arr) {
    let i = 0;

    while (i < arr.length) {
        let j = i;

        // Find the contiguous group with the same parity
        while (
            j + 1 < arr.length &&
            arr[j] % 2 === arr[j + 1] % 2
        ) {
            j++;
        }

        // Sort this group in descending order
        arr.splice(
            i,
            j - i + 1,
            ...arr.slice(i, j + 1).sort((a, b) => b - a)
        );

        i = j + 1;
    }

    return arr;
}
