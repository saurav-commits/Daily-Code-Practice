function countTriplets(arr, l, r) {
    arr.sort((a, b) => a - b);

    function countAtMost(x) {
        let count = 0;
        const n = arr.length;

        for (let i = 0; i < n - 2; i++) {
            let j = i + 1;
            let k = n - 1;

            while (j < k) {
                const sum = arr[i] + arr[j] + arr[k];

                if (sum <= x) {
                    // All elements between j+1 and k
                    // will also form a valid triplet.
                    count += k - j;
                    j++;
                } else {
                    k--;
                }
            }
        }

        return count;
    }

    return countAtMost(r) - countAtMost(l - 1);
}