/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let max = 0;

    for (const ch of s) {
        if (ch === '(') {
            depth++;
            max = Math.max(max, depth);
        } else if (ch === ')') {
            depth--;
        }
    }

    return max;
};