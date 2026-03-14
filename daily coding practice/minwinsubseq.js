function minWindowSubsequence(s1, s2) {
    let n = s1.length, m = s2.length;
    let minLen = Infinity;
    let result = "";

    for (let i = 0; i < n; i++) {
        // Step 1: try to match s2 starting from s1[i]
        let j = 0;
        let k = i;

        while (k < n && j < m) {
            if (s1[k] === s2[j]) j++;
            k++;
        }

        // if s2 is NOT fully matched, stop
        if (j < m) break;

        // Step 2: shrink window from the right
        let end = k - 1;
        j = m - 1;
        k = end;

        while (k >= i) {
            if (s1[k] === s2[j]) {
                j--;
                if (j < 0) break;
            }
            k--;
        }

        let start = k;
        let windowLen = end - start + 1;

        if (windowLen < minLen) {
            minLen = windowLen;
            result = s1.substring(start, end + 1);
        }
    }

    return result;
}


console.log(minWindowSubsequence("geeksforgeeks", "eksrg")); // "eksforg"
console.log(minWindowSubsequence("abcdebdde", "bde"));      // "bcde"
console.log(minWindowSubsequence("ad", "b"));   