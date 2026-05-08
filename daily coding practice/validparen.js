function isValid(s) {
    let count = 0;

    for (let ch of s) {

        if (ch === '(') {
            count++;
        }
        else if (ch === ')') {

            count--;

            if (count < 0) {
                return false;
            }
        }
    }

    return count === 0;
}

function validParenthesis(s) {

    let ans = new Set();

    let visited = new Set();

    let q = [s];

    visited.add(s);

    let found = false;

    while (q.length > 0) {

        let size = q.length;

        for (let i = 0; i < size; i++) {

            let curr = q.shift();

            // valid string found
            if (this.isValid(curr)) {

                ans.add(curr);

                found = true;
            }

            // minimum level reached
            if (found) continue;

            // generate next states
            for (let j = 0; j < curr.length; j++) {

                if (
                    curr[j] !== '(' &&
                    curr[j] !== ')'
                ) continue;

                let next =
                    curr.slice(0, j) +
                    curr.slice(j + 1);

                if (!visited.has(next)) {

                    visited.add(next);

                    q.push(next);
                }
            }
        }

        // stop after minimum removals level
        if (found) break;
    }

    return [...ans].sort();
}

// Example usage:
let s = "()())()";
console.log(validParenthesis(s)); // Output: ["(())()", "()()()"]
