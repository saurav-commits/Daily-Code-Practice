function myAtoi(s) {
    let i = 0;
    let n = s.length;

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // 1. Skip leading spaces
    while (i < n && s[i] === ' ') {
        i++;
    }

    // 2. Check sign
    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Read digits
    let num = 0;

    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0'; // char → number

        // 4. Overflow check
        if (num > Math.floor((INT_MAX - digit) / 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        num = num * 10 + digit;
        i++;
    }

    return num * sign;
}

console.log(myAtoi("   -42")); // Output: -42
console.log(myAtoi("4193 with words"));