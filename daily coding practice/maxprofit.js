function maxProfit(arr, k) {
    let hold = -arr[0]; // buying first stock
    let cash = 0;

    for (let i = 1; i < arr.length; i++) {
        let prevCash = cash;

        // sell today
        cash = Math.max(cash, hold + arr[i] - k);

        // buy today
        hold = Math.max(hold, prevCash - arr[i]);
    }

    return cash;
}

const arr = [6, 1, 7, 2, 8, 4], k = 2;
console.log(maxProfit(arr,k));
