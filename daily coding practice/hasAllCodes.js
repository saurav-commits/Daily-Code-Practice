function hasAllCodes(s, k) {

    const totalNeeded = 1 << k;

    if (s.length < totalNeeded + k - 1) return false;

    const seen = new Array(totalNeeded).fill(false);

    let count = 0;
    let hash = 0;
    const mask = totalNeeded - 1;

    for (let i = 0; i < s.length; i++) {

        // shift left and add new bit
        hash = ((hash << 1) & mask) | (s[i] - '0');

        if (i >= k - 1) {

            if (!seen[hash]) {
                seen[hash] = true;
                count++;

                if (count === totalNeeded) return true;
            }
        }
    }

    return false;
}

const s = "00110110", k = 2;

console.log(hasAllCodes(s,k));
