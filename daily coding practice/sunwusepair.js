class Solution {
    sumOfAND(arr) {
        let ans = 0n;

        for (let bit = 0; bit < 27; bit++) {
            let count = 0n;
            const mask = 1n << BigInt(bit);

            for (const x of arr) {
                if ((BigInt(x) & mask) !== 0n) {
                    count++;
                }
            }

            ans += count * (count - 1n) / 2n * mask;
        }

        return ans.toString();
    }
}