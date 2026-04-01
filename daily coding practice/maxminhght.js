function maxMinHeight(arr, k, w) {
    const n = arr.length;

    let low = Math.min(...arr);
    let high = low + k;
    let answer = low;

    function canAchieve(target) {
        let ops = 0;
        let added = new Array(n).fill(0);
        let windowSum = 0;

        for (let i = 0; i < n; i++) {

            if (i >= w) {
                windowSum -= added[i - w];
            }

            let currentHeight = arr[i] + windowSum;

            if (currentHeight < target) {
                let need = target - currentHeight;

                ops += need;
                if (ops > k) return false;

                added[i] = need;
                windowSum += need;
            }
        }

        return true;
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canAchieve(mid)) {
            answer = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return answer;
}

console.log(maxMinHeight([2,3,4,5,1], 2, 2)); // 2
console.log(maxMinHeight([5,8], 5, 1)); // 9
