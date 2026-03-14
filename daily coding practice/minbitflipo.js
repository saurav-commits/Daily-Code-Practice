function minKBitFlips(arr, k) {
    let n = arr.length;
    let flips = 0;
    let result = 0;
    let isFlipped = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {

        if (i >= k) {
            flips ^= isFlipped[i - k];
        }

        if ((arr[i] ^ flips) === 0) {

            if (i + k > n) return -1;

            result++;
            flips ^= 1;
            isFlipped[i] = 1;
        }
    }

    return result;
}

const arr = [1,1,0,0,0,1,1,0,1,1,1], k =2;
console.log(minKBitFlips(arr, k));
