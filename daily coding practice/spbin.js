function makeLargestSpecial(s) {

    let count = 0;
    let start = 0;
    let parts = [];

    for (let i = 0; i < s.length; i++) {

        if (s[i] === '1') count++;
        else count--;

        // found special substring
        if (count === 0) {

            // recursively optimize inner part
            let inner = makeLargestSpecial(s.substring(start + 1, i));

            parts.push('1' + inner + '0');

            start = i + 1;
        }
    }

    // sort descending
    parts.sort((a, b) => b.localeCompare(a));

    return parts.join('');
}

console.log(makeLargestSpecial("11011000"));
// "11100100"

console.log(makeLargestSpecial("10"));
// "10"