class Solution {
    minTime(n, s1, s2) {
        let lo = 1, hi = Math.min(s1, s2) * n;
        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (Math.floor(mid / s1) + Math.floor(mid / s2) >= n) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return lo;
    }
}