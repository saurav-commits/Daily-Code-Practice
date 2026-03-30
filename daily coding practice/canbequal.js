function canBeEqual(s1, s2) {
    const even = new Array(26).fill(0);
    const odd = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        let idx1 = s1.charCodeAt(i) - 97;
        let idx2 = s2.charCodeAt(i) - 97;

        if (i % 2 === 0) {
            even[idx1]++;
            even[idx2]--;
        } else {
            odd[idx1]++;
            odd[idx2]--;
        }
    }

    return even.every(v => v === 0) && odd.every(v => v === 0);
}

const s1= "abcdba" , s2 = "cabdab"
console.log(canBeEqual(s1,s2));
