function minTime(arr, k) {

    let low = Math.max(...arr);
    let high = arr.reduce((sum, x) => sum + x, 0);
    let answer = high;

    function canPaint(maxTime) {

        let painters = 1;
        let currentSum = 0;

        for (let length of arr) {

            if (currentSum + length <= maxTime) {
                currentSum += length;
            } else {
                painters++;
                currentSum = length;

                if (painters > k) return false;
            }
        }

        return true;
    }

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (canPaint(mid)) {
            answer = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return answer;
}


console.log(minTime([5, 10, 30, 20, 15], 3)); // 35
console.log(minTime([10, 20, 30, 40], 2)); // 60
console.log(minTime([100, 200, 300, 400], 1)); // 1000
