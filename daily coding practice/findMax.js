/**
 * @param {number} n
 * @returns {number}
 *

class Solution {
    findMax(n) {
        // code here
        
    }
}

*/

class Solution {
    digitSum(n) {
        let sum = 0;

        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }

        return sum;
    }

    findMax(n) {
        const s = String(n);

        let ans = n;
        let maxSum = this.digitSum(n);

        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0') continue;

            const candidate = Number(
                s.slice(0, i) +
                (Number(s[i]) - 1) +
                '9'.repeat(s.length - i - 1)
            );

            const sum = this.digitSum(candidate);

            if (sum > maxSum || (sum === maxSum && candidate > ans)) {
                ans = candidate;
                maxSum = sum;
            }
        }

        return ans;
    }
}