function minMirrorPairDistance (nums) {
     let res = 100000;
        let i = 0;
        const seen = new Map();

        for (let n of nums) {
            if (seen.has(n))
                res = Math.min(res, i - seen.get(n));
            let r = 0;
            for (; n; n = (n / 10) | 0)
                r = r * 10 + (n % 10);

            seen.set(r, i++);
        }

        return -(res === 100000) | res;
};

console.log(minMirrorPairDistance([1, 23, 456, 321, 54])); // Output: 2