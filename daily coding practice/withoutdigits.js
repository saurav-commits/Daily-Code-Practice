function countNumbers(n, d) {
    if (n === 0) return 0;

    const str = String(n);
    const len = str.length;
    let count = 0;

    // Count numbers having fewer digits than n
    for (let digits = 1; digits < len; digits++) {
        if (d === 0) {
            // First digit: 1-9 => 9 choices
            // Other digits: 1-9 => 9 choices
            count += 9 ** digits;
        } else {
            // First digit: 1-9 except d => 8 choices
            // Other digits: 0-9 except d => 9 choices
            count += 8 * (9 ** (digits - 1));
        }
    }

    // Count numbers having same number of digits as n
    for (let i = 0; i < len; i++) {
        const current = Number(str[i]);
        const remaining = len - i - 1;

        let choices = 0;

        if (i === 0) {
            // First digit cannot be 0
            for (let digit = 1; digit < current; digit++) {
                if (digit !== d) {
                    choices++;
                }
            }
        } else {
            // Other digits can be 0
            for (let digit = 0; digit < current; digit++) {
                if (digit !== d) {
                    choices++;
                }
            }
        }

        count += choices * (9 ** remaining);

        // If n's current digit is d,
        // we cannot construct a valid number equal to/after this prefix.
        if (current === d) {
            return count;
        }
    }

    // n itself doesn't contain d
    return count + 1;
}