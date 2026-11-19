class Solution {
    sortIt(arr) {
        const odds = [];
        const evens = [];

        for (const x of arr) {
            if (x & 1) odds.push(x);
            else evens.push(x);
        }

        odds.sort((a, b) => b - a);
        evens.sort((a, b) => a - b);

        let i = 0;
        for (const x of odds) arr[i++] = x;
        for (const x of evens) arr[i++] = x;
    }
}