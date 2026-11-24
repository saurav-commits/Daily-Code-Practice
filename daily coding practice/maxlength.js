/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    const gcd = (a, b) => {
        while (b) [a, b] = [b, a % b];
        return a;
    };

    const n = nums.length;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        let prod = 1n, g = 0, l = 1;
        for (let j = i; j < n; j++) {
            const v = nums[j];
            prod *= BigInt(v);
            g = gcd(g, v);
            l = (l / gcd(l, v)) * v;
            if (prod === BigInt(l) * BigInt(g)) {
                ans = Math.max(ans, j - i + 1);
            }
        }
    }
    return ans;
};