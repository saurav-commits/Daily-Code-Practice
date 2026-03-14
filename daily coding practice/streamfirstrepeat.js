function firstNonRepeating(s) {
    let freq = new Array(26).fill(0);
    let queue = [];
    let result = "";

    for (let ch of s) {
        let idx = ch.charCodeAt(0) - 97;
        freq[idx]++;

        queue.push(ch);

        while (queue.length) {
            let front = queue[0];
            let fIdx = front.charCodeAt(0) - 97;

            if (freq[fIdx] > 1) {
                queue.shift();
            } else {
                break;
            }
        }

        result += queue.length ? queue[0] : '#';
    }

    return result;
}

console.log(firstNonRepeating("aabc")); // "a#bb"
console.log(firstNonRepeating("bb"));   // "b#"
console.log(firstNonRepeating("abc"));  // "abc"
