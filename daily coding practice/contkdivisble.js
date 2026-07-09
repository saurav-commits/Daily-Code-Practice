class Solution {
    countKdivPairs(arr, k) {
        const freq = new Array(k).fill(0);
        let count = 0;

        for (const num of arr) {
            const rem = num % k;
            const complement = (k - rem) % k;

            count += freq[complement];
            freq[rem]++;
        }

        return count;
    }
}