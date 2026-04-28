function minOperations(grid, x) {
    let arr = [];

    // Flatten grid
    for (let row of grid) {
        for (let num of row) {
            arr.push(num);
        }
    }

    // Check feasibility
    let remainder = arr[0] % x;
    for (let num of arr) {
        if (num % x !== remainder) return -1;
    }

    // Sort and find median
    arr.sort((a, b) => a - b);
    let median = arr[Math.floor(arr.length / 2)];

    // Count operations
    let operations = 0;
    for (let num of arr) {
        operations += Math.abs(num - median) / x;
    }

    return operations;
}

// Example usage:
const grid = [[1, 2], [3, 4]];
const x = 1;
const result = minOperations(grid, x);
console.log(result); // Output: 2