const totalWaviness = (num1, num2) => {
    const solve = (N) => {
        if (N < 0n) return 0n;

        const digits = N.toString();
        const memo = new Map();

        const dfs = (pos, tight, started, cnt, p2, p1) => {
            const key = `${pos}|${tight}|${started}|${cnt}|${p2}|${p1}`;

            if (!tight && memo.has(key)) {
                return memo.get(key);
            }

            if (pos === digits.length) {
                return [1n, 0n]; // [ways, wavinessSum]
            }

            const limit = tight ? Number(digits[pos]) : 9;

            let ways = 0n;
            let sum = 0n;

            for (let d = 0; d <= limit; d++) {
                const ntight = tight && d === limit;

                let child;

                if (!started && d === 0) {
                    child = dfs(pos + 1, ntight, false, 0, 10, 10);
                } else if (!started) {
                    child = dfs(pos + 1, ntight, true, 1, 10, d);
                } else if (cnt === 1) {
                    child = dfs(pos + 1, ntight, true, 2, p1, d);
                } else {
                    const add =
                        (p1 > p2 && p1 > d) ||
                        (p1 < p2 && p1 < d)
                            ? 1n
                            : 0n;

                    child = dfs(pos + 1, ntight, true, 2, p1, d);

                    ways += child[0];
                    sum += child[1] + add * child[0];
                    continue;
                }

                ways += child[0];
                sum += child[1];
            }

            const result = [ways, sum];

            if (!tight) memo.set(key, result);

            return result;
        };

        return dfs(0, true, false, 0, 10, 10)[1];
    };

    return Number(
        solve(BigInt(num2)) -
        solve(BigInt(num1) - 1n)
    );
};