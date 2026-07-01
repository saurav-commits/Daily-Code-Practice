class Solution {
    maxSum(arr) {
        let noSkip = arr[0];
        let oneSkip = Number.NEGATIVE_INFINITY;
        let ans = arr[0];

        for (let i = 1; i < arr.length; i++) {
            let newOneSkip = Math.max(oneSkip + arr[i], noSkip);
            let newNoSkip = Math.max(arr[i], noSkip + arr[i]);

            noSkip = newNoSkip;
            oneSkip = newOneSkip;

            ans = Math.max(ans, noSkip, oneSkip);
        }

        return ans;
    }
}