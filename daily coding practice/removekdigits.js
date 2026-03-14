function removeKdigits(s, k) {
    let stack = [];

    for (let ch of s) {
        while (stack.length && k > 0 && stack[stack.length - 1] > ch) {
            stack.pop();
            k--;
        }
        stack.push(ch);
    }

    // If still digits to remove, remove from end
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Remove leading zeros
    let result = stack.join('').replace(/^0+/, '');

    return result === '' ? '0' : result;
}

console.log(removeKdigits("4325043", 3));   // "2043"
console.log(removeKdigits("765028321", 5)); // "221"
console.log(removeKdigits("10", 2));        // "0"
console.log(removeKdigits("10200", 1));     // "200"
