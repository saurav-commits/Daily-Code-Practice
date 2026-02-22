function countSubarraysWithXor(arr, k) {

    let prefixXor = 0;
    let count = 0;

    const freq = new Map();
    freq.set(0, 1);  // important for subarrays starting from index 0

    for (let num of arr) {

        prefixXor ^= num;

        let required = prefixXor ^ k;

        if (freq.has(required)) {
            count += freq.get(required);
        }

        freq.set(prefixXor, (freq.get(prefixXor) || 0) + 1);
    }

    return count;
}

const arr = [4, 2, 2, 6, 4], k = 6;

console.log(countSubarraysWithXor(arr, k));
