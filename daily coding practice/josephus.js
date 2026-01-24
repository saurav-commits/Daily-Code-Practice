function josephus(n, k) {
    let winner = 0; // 0-based index

    for (let i = 2; i <= n; i++) {
        winner = (winner + k) % i;
    }

    return winner + 1; // convert to 1-based
}


console.log(josephus(5, 2)); // 3
console.log(josephus(7, 3)); // 4
console.log(josephus(1, 5)); // 1
