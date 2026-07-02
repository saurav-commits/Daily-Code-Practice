class Solution {
    isKPartitionPossible(arr, k) {
        let dp = new Array(k).fill(false);

        for (let num of arr) {
            let next = [...dp];

            // Start a new subset
            next[num % k] = true;

            // Extend existing subsets
            for (let r = 0; r < k; r++) {
                if (dp[r]) {
                    next[(r + num) % k] = true;
                }
            }

            dp = next;

            if (dp[0]) return true;
        }

        return false;
    }
}