class Solution {
    gcdValues(nums, queries) {
        const mx = Math.max(...nums);

        const freq = new Array(mx + 1).fill(0);
        for (const x of nums) freq[x]++;

        const exact = new Array(mx + 1).fill(0);

        // exact gcd counts
        for (let g = mx; g >= 1; g--) {

            let cnt = 0;

            for (let m = g; m <= mx; m += g)
                cnt += freq[m];

            let pairs = cnt * (cnt - 1) / 2;

            for (let m = g * 2; m <= mx; m += g)
                pairs -= exact[m];

            exact[g] = pairs;
        }

        // prefix counts
        const prefix = new Array(mx + 1).fill(0);

        for (let g = 1; g <= mx; g++)
            prefix[g] = prefix[g - 1] + exact[g];

        const ans = [];

        for (const q of queries) {

            let l = 1, r = mx;

            while (l < r) {
                const mid = (l + r) >> 1;

                if (prefix[mid] > q)
                    r = mid;
                else
                    l = mid + 1;
            }

            ans.push(l);
        }

        return ans;
    }
}