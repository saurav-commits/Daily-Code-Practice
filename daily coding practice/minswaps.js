
var minSwaps = function(nums) {
    const digitSum = (num) => {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    };

    const n = nums.length;

    // Store each number with its original index
    const arr = nums.map((num, index) => ({
        num,
        index,
        sum: digitSum(num)
    }));

    // Sort by digit sum, then by number
    arr.sort((a, b) => {
        if (a.sum !== b.sum) {
            return a.sum - b.sum;
        }
        return a.num - b.num;
    });

    // Count cycles to find minimum swaps
    const visited = new Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i] || arr[i].index === i) {
            continue;
        }

        let cycleLength = 0;
        let j = i;

        while (!visited[j]) {
            visited[j] = true;
            j = arr[j].index;
            cycleLength++;
        }

        swaps += cycleLength - 1;
    }

    return swaps;
};
