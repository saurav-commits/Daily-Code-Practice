/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    function backtrack(current, open, close) {
        // A complete valid combination
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Add opening parenthesis
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        // Add closing parenthesis only when valid
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return result;
};