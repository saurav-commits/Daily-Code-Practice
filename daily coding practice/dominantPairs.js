class Solution {
    dominantPairs(arr) {
        const n = arr.length;
        const mid = n / 2;

        const left = arr.slice(0, mid).sort((a, b) => a - b);
        const right = arr.slice(mid).sort((a, b) => a - b);

        let j = 0;
        let count = 0;

        for (let i = 0; i < mid; i++) {
            while (j < mid && left[i] >= 5 * right[j]) {
                j++;
            }

            count += j;
        }

        return count;
    }
}