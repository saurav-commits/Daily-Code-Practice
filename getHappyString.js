function getHappyString(n, k) {
    let result = "";
    let count = 0;

    function backtrack(curr) {
        if (curr.length === n) {
            count++;

            if (count === k) {
                result = curr;
                return true;
            }

            return false;
        }

        for (let ch of ['a', 'b', 'c']) {
            if (curr.length > 0 && curr[curr.length - 1] === ch) {
                continue;
            }

            if (backtrack(curr + ch)) {
                return true;
            }
        }

        return false;
    }

    backtrack("");

    return result;
}

const n=3, k=9;
console.log(getHappyString(n,k));
