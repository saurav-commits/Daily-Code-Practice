class Solution {
    minInsAndDel(a, b) {
        const n = a.length;
        const m = b.length;

        const pos = new Map();
        for (let i = 0; i < m; i++) {
            pos.set(b[i], i);
        }

        const seq = [];
        for (const x of a) {
            if (pos.has(x)) seq.push(pos.get(x));
        }

        const lis = [];
        for (const x of seq) {
            let l = 0, r = lis.length;
            while (l < r) {
                const mid = (l + r) >> 1;
                if (lis[mid] < x) l = mid + 1;
                else r = mid;
            }

            if (l === lis.length) lis.push(x);
            else lis[l] = x;
        }

        const lcs = lis.length;
        return (n - lcs) + (m - lcs);
    }
}