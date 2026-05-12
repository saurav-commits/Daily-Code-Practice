/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */

class Solution {
    
    gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }
    
    lcm(a, b) {
        return (a * b) / this.gcd(a, b);
    }

    build(node, start, end, arr, tree) {
        if (start === end) {
            tree[node] = arr[start];
            return;
        }

        let mid = Math.floor((start + end) / 2);

        this.build(2 * node + 1, start, mid, arr, tree);
        this.build(2 * node + 2, mid + 1, end, arr, tree);

        tree[node] = this.lcm(
            tree[2 * node + 1],
            tree[2 * node + 2]
        );
    }

    update(node, start, end, idx, val, tree) {
        if (start === end) {
            tree[node] = val;
            return;
        }

        let mid = Math.floor((start + end) / 2);

        if (idx <= mid) {
            this.update(2 * node + 1, start, mid, idx, val, tree);
        } else {
            this.update(2 * node + 2, mid + 1, end, idx, val, tree);
        }

        tree[node] = this.lcm(
            tree[2 * node + 1],
            tree[2 * node + 2]
        );
    }

    query(node, start, end, l, r, tree) {
        // No overlap
        if (r < start || end < l) {
            return 1;
        }

        // Complete overlap
        if (l <= start && end <= r) {
            return tree[node];
        }

        let mid = Math.floor((start + end) / 2);

        let left = this.query(
            2 * node + 1,
            start,
            mid,
            l,
            r,
            tree
        );

        let right = this.query(
            2 * node + 2,
            mid + 1,
            end,
            l,
            r,
            tree
        );

        return this.lcm(left, right);
    }

    RangeLCMQuery(arr, queries) {
        let n = arr.length;
        let tree = new Array(4 * n).fill(1);

        this.build(0, 0, n - 1, arr, tree);

        let ans = [];

        for (let q of queries) {
            if (q[0] === 1) {
                // Update query
                let index = q[1];
                let value = q[2];

                this.update(0, 0, n - 1, index, value, tree);

            } else {
                // Range query
                let L = q[1];
                let R = q[2];

                ans.push(
                    this.query(0, 0, n - 1, L, R, tree)
                );
            }
        }

        return ans;
    }
}