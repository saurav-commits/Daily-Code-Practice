class Solution {
    binarySearchable(arr) {
        let ans = 0;

        const dfs = (l, r, low, high) => {
            if (l > r) return;

            let mid = Math.floor((l + r) / 2);

            if (arr[mid] > low && arr[mid] < high) {
                ans++;
            }

            dfs(l, mid - 1, low, Math.min(high, arr[mid]));
            dfs(mid + 1, r, Math.max(low, arr[mid]), high);
        };

        dfs(0, arr.length - 1, -Infinity, Infinity);

        return ans;
    }
}