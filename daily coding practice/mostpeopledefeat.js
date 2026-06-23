class Solution {
    maxPeople(p) {
        let low = 0, high = 100000;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            let sum = (mid * (mid + 1) * (2 * mid + 1)) / 6;

            if (sum <= p) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return high;
    }
}