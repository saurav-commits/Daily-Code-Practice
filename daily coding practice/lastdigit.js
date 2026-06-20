class Solution {
    getLastDigit(a, b) {
        if (b === "0") return 1;

        let base = Number(a[a.length - 1]);

        let expMod4 = 0;
        for (let ch of b) {
            expMod4 = (expMod4 * 10 + Number(ch)) % 4;
        }

        let exp = expMod4 === 0 ? 4 : expMod4;

        let ans = 1;
        while (exp > 0) {
            if (exp & 1) {
                ans = (ans * base) % 10;
            }
            base = (base * base) % 10;
            exp >>= 1;
        }

        return ans;
    }
}