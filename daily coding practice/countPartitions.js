function countPartitions(arr, diff) {
    const totalSum = arr.reduce((a, b) => a + b, 0);

    // Invalid cases
    if ((totalSum + diff) % 2 !== 0) return 0;

    const target = (totalSum + diff) / 2;

    // DP array
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1; // One way to make sum 0

    for (let num of arr) {
        for (let j = target; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }

    return dp[target];
}

const arr = [5, 2, 6, 4], diff = 3;
console.log(countPartitions(arr,diff));
