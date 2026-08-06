class Solution {
    minOperations(arr) {
        let increments = 0;
        let maxVal = 0;

        for (let num of arr) {
            maxVal = Math.max(maxVal, num);

            // Count set bits
            let x = num;

            while (x > 0) {
                increments += x % 2;
                x = Math.floor(x / 2);
            }
        }

        // Number of doubling operations
        let doubles = 0;

        while (maxVal > 1) {
            maxVal = Math.floor(maxVal / 2);
            doubles++;
        }

        return increments + doubles;
    }
}