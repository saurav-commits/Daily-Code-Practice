function findLongestWord(s, d) {
    const n = s.length;
    // next_pos[i][c] = next index >= i in s with character c, or n (sentinel) if none
    const next_pos = new Array(n + 1);
    next_pos[n] = new Array(26).fill(n);
    for (let i = n - 1; i >= 0; i--) {
        next_pos[i] = next_pos[i + 1].slice();
        next_pos[i][s.charCodeAt(i) - 97] = i;
    }

    function isSubsequence(word) {
        let pos = 0;
        for (let k = 0; k < word.length; k++) {
            const c = word.charCodeAt(k) - 97;
            const idx = next_pos[pos][c];
            if (idx === n) return false;
            pos = idx + 1;
        }
        return true;
    }

    let best = "";
    for (const word of d) {
        if (isSubsequence(word)) {
            if (word.length > best.length || (word.length === best.length && word < best)) {
                best = word;
            }
        }
    }
    return best;
}

// Examples
console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])); // "apple"
console.log(findLongestWord("abpcplea", ["a", "b", "c"])); // "a"