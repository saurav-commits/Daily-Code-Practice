// Given an positive integer n, find a subset of numbers from 1 to n (inclusive), where each number can be used at most once, such that:

// The XOR of all elements in the subset is exactly n.
// The size of the subset is as large as possible.
// If multiple such subsets exist, choose the lexicographically smallest one.
// Lexicographical Order : A subset A[] is lexicographically smaller than subset B[] if at the first index where they differ, A[i] < B[i] (based on character ASCII/Unicode values).
// If all elements match but one subset ends earlier, the shorter subset is considered smaller.

function subsetXor(n) {
     let S;
    if (n % 4 === 0) S = n;
    else if (n % 4 === 1) S = 1;
    else if (n % 4 === 2) S = n + 1;
    else S = 0;

    if (S === n) {
        return Array.from({ length: n }, (_, i) => i + 1);
    }
   
    const x = S ^ n;

    // x will always be in 1..n
    const ans = [];
    for (let i = 1; i <= n; i++) {
        if (i !== x) ans.push(i);
    }

    return ans;
}

console.log(subsetXor(4));  // → [1, 2, 3, 4]
