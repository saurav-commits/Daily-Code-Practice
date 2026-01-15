function minCandies(arr) {
    let n = arr.length;
    let candies = new Array(n).fill(1);

    // Left to Right
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Right to Left
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Sum candies
    return candies.reduce((a, b) => a + b, 0);
}



const arr = [1, 0, 2];
console.log(minCandies(arr));
