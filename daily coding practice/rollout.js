
class Solution {
    findRollOut(s, roll) {
        let n = s.length;
        let shifts = new Array(n).fill(0);

        // Count how many rolls affect each position
        for (let r of roll) {
            shifts[r - 1]++;
        }

        // Accumulate from right to left
        let count = 0;
        let result = s.split('');

        for (let i = n - 1; i >= 0; i--) {
            count += shifts[i];

            let charCode = s.charCodeAt(i) - 97;
            result[i] = String.fromCharCode(
                (charCode + count) % 26 + 97
            );
        }

        return result.join('');
    }
}
