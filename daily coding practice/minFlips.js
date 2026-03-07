var minFlips = function(s) {
    let n = s.length;
    let s2 = s + s;

    let alt1 = "", alt2 = "";
    
    for (let i = 0; i < 2 * n; i++) {
        alt1 += i % 2 === 0 ? '0' : '1';
        alt2 += i % 2 === 0 ? '1' : '0';
    }

    let diff1 = 0, diff2 = 0;
    let left = 0;
    let ans = Infinity;

    for (let right = 0; right < 2 * n; right++) {
        if (s2[right] !== alt1[right]) diff1++;
        if (s2[right] !== alt2[right]) diff2++;

        if (right - left + 1 > n) {
            if (s2[left] !== alt1[left]) diff1--;
            if (s2[left] !== alt2[left]) diff2--;
            left++;
        }

        if (right - left + 1 === n) {
            ans = Math.min(ans, diff1, diff2);
        }
    }

    return ans;
};

const s = "111000";
console.log(minFlips(s));
