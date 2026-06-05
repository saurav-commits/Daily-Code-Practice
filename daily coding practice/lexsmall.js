class Solution {
    lexicographicallySmallest(s, k) {
        let n = s.length;

        // Correct k
        if ((n & (n - 1)) === 0) {
            k = Math.floor(k / 2);
        } else {
            k *= 2;
        }

        // If not possible or resulting string is empty
        if (k >= n) return "-1";

        let stack = [];

        for (let ch of s) {
            while (
                stack.length &&
                k > 0 &&
                stack[stack.length - 1] > ch
            ) {
                stack.pop();
                k--;
            }
            stack.push(ch);
        }

        while (k > 0) {
            stack.pop();
            k--;
        }

        return stack.length ? stack.join("") : "-1";
    }
}