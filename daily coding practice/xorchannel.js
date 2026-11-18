/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var findXOR = function(l, r) {
    const f = (n) => {
        switch (n % 4) {
            case 0: return n;
            case 1: return 1;
            case 2: return n + 1;
            default: return 0;
        }
    };
    return f(r) ^ f(l - 1);
};