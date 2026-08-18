class Solution {
    compress(s) {
        if (!s || s.length === 0) return "";

        const ans = [];
        let i = s.length;

        while (i > 0) {
            // Can current prefix be represented as X + X?
            if (i % 2 === 0) {
                const half = i / 2;

                let same = true;

                for (let j = 0; j < half; j++) {
                    if (s[j] !== s[j + half]) {
                        same = false;
                        break;
                    }
                }

                if (same) {
                    ans.push('*');
                    i = half;
                    continue;
                }
            }

            // Cannot compress, keep last character
            ans.push(s[i - 1]);
            i--;
        }

        return ans.reverse().join('');
    }
}