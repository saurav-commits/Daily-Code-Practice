function countValidNumbers(n, d) {

    function digitSum(x) {
        let sum = 0;
        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }
        return sum;
    }

    let low = 1;
    let high = n;
    let firstValid = n + 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (mid - digitSum(mid) >= d) {
            firstValid = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    if (firstValid > n) return 0;

    return n - firstValid + 1;
}

console.log(countValidNumbers(13, 2)); // 4
console.log(countValidNumbers(14, 3)); // 5
console.log(countValidNumbers(100, 10)); // works
