function maxSum(arr) {
    const n = arr.length;

    // dpKeep = maximum sum if current element is kept as arr[i]
    // dpOne  = maximum sum if current element is changed to 1
    let dpKeep = 0;
    let dpOne = 0;

    for (let i = 1; i < n; i++) {
        // Current element kept as arr[i]
        const newKeep = Math.max(
            dpKeep + Math.abs(arr[i] - arr[i - 1]),
            dpOne + Math.abs(arr[i] - 1)
        );

        // Current element changed to 1
        const newOne = Math.max(
            dpKeep + Math.abs(1 - arr[i - 1]),
            dpOne + Math.abs(1 - 1)
        );

        dpKeep = newKeep;
        dpOne = newOne;
    }

    return Math.max(dpKeep, dpOne);
}