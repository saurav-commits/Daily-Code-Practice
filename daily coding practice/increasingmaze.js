class Solution {
    increasingNumbers(n) {
        const ans = [];

        if (n === 1) {
            for (let i = 0; i <= 9; i++) ans.push(i);
            return ans;
        }

        if (n > 10) return ans;

        const dfs = (num, lastDigit, len) => {
            if (len === n) {
                ans.push(num);
                return;
            }

            for (let d = lastDigit + 1; d <= 9; d++) {
                dfs(num * 10 + d, d, len + 1);
            }
        };

        for (let start = 1; start <= 9; start++) {
            dfs(start, start, 1);
        }

        return ans;
    }
}