class Solution {
    isPossible(n, m, s) {
        let x = 0, y = 0;
        let minx = 0, maxx = 0, miny = 0, maxy = 0;

        for (const c of s) {
            if (c === 'L') x--;
            else if (c === 'R') x++;
            else if (c === 'D') y--;   // up
            else y++;                  // 'U' -> down

            minx = Math.min(minx, x); maxx = Math.max(maxx, x);
            miny = Math.min(miny, y); maxy = Math.max(maxy, y);
        }

        return (maxx - minx + 1 <= m) && (maxy - miny + 1 <= n);
    }
}