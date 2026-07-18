var findGCD = function(nums) {
    let mn = Infinity, mx = -Infinity;

    for (const x of nums) {
        mn = Math.min(mn, x);
        mx = Math.max(mx, x);
    }

    while (mx !== 0) {
        [mn, mx] = [mx, mn % mx];
    }

    return mn;
};