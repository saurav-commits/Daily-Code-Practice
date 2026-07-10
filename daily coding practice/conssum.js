class Solution {
    countConsecutive(n) {
        let count = 0;

        for (let k = 2; (k * (k + 1)) / 2 <= n; k++) {
            let rem = n - (k * (k - 1)) / 2;

            if (rem > 0 && rem % k === 0) {
                count++;
            }
        }

        return count;
    }
}