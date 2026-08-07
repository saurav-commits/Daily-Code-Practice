/**
 * @param {number} n
 * @return {number}
 */
function countFriendsPairings(n) {
    if (n <= 2) return n;

    let prev2 = 1; // f(1)
    let prev1 = 2; // f(2)

    for (let i = 3; i <= n; i++) {
        let curr = prev1 + (i - 1) * prev2;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
}