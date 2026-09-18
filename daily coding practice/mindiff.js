class Solution {
    minDiff(root) {
        const stack = [];
        let cur = root;
        let prev = null;
        let ans = Infinity;

        while (cur || stack.length) {
            while (cur) {
                stack.push(cur);
                cur = cur.left;
            }
            cur = stack.pop();

            if (prev !== null) {
                ans = Math.min(ans, cur.data - prev);
            }
            prev = cur.data;

            cur = cur.right;
        }

        return ans;
    }
}