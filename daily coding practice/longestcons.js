class Solution {
    longestConsecutive(root) {
        let ans = 1;

        function dfs(node, parentVal, len) {
            if (!node) return;

            if (node.data === parentVal + 1) {
                len++;
            } else {
                len = 1;
            }

            ans = Math.max(ans, len);

            dfs(node.left, node.data, len);
            dfs(node.right, node.data, len);
        }

        dfs(root, -Infinity, 0);

        return ans === 1 ? -1 : ans;
    }
}