function hasRedundantParentheses(s) {
    let stack = [];
    let operators = new Set(['+', '-', '*', '/']);

    for (let ch of s) {
        if (ch !== ')') {
            stack.push(ch);
        } else {
            let hasOperator = false;

            // pop till '('
            while (stack.length && stack[stack.length - 1] !== '(') {
                let top = stack.pop();
                if (operators.has(top)) {
                    hasOperator = true;
                }
            }

            // pop '('
            stack.pop();

            // if no operator found → redundant
            if (!hasOperator) return true;
        }
    }

    return false;
}


console.log(hasRedundantParentheses("((a+b))"));     // true
console.log(hasRedundantParentheses("(a+(b)/c)"));  // true
console.log(hasRedundantParentheses("(a+b+(c+d))")); // false
