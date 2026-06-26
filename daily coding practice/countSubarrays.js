/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countSubarrays = function(nums, target) {
    const n = nums.length;

    const prefix = [0];
    let sum = 0;

    for (const x of nums) {
        sum += (x === target ? 1 : -1);
        prefix.push(sum);
    }

    // Coordinate compression
    const vals = [...new Set(prefix)].sort((a, b) => a - b);

    const index = new Map();
    for (let i = 0; i < vals.length; i++) {
        index.set(vals[i], i + 1); // 1-based
    }

    const bit = new Array(vals.length + 2).fill(0);

    function update(i) {
        while (i < bit.length) {
            bit[i]++;
            i += i & -i;
        }
    }

    function query(i) {
        let res = 0;
        while (i > 0) {
            res += bit[i];
            i -= i & -i;
        }
        return res;
    }

    let ans = 0;

    // Initial prefix sum = 0
    update(index.get(0));

    for (let i = 1; i <= n; i++) {
        const idx = index.get(prefix[i]);
        ans += query(idx - 1); // previous prefix sums < current
        update(idx);
    }

    return ans;
};