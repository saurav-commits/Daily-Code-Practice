class Solution {
    levelWiseSorted(arr) {
        let ans = [];
        let i = 0;
        let levelSize = 1;
        let n = arr.length;

        while (i < n) {
            let level = [];

            for (let j = 0; j < levelSize && i < n; j++, i++) {
                level.push(arr[i]);
            }

            level.sort((a, b) => a - b);
            ans.push(level);

            levelSize *= 2;
        }

        return ans;
    }
}