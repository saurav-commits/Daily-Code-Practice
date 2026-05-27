
    function wifiRange(n, s, x) {
        let diff = new Array(n + 1).fill(0);

        for (let i = 0; i < n; i++) {
            if (s[i] === '1') {
                let left = Math.max(0, i - x);
                let right = Math.min(n - 1, i + x);

                diff[left] += 1;
                diff[right + 1] -= 1;
            }
        }

        let coverage = 0;

        for (let i = 0; i < n; i++) {
            coverage += diff[i];

            if (coverage <= 0) {
                return false;
            }
        }

        return true;
    }
