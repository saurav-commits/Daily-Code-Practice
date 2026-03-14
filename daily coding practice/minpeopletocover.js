function minPeopleToCover(arr) {
    let n = arr.length;
    let intervals = [];

    // Step 1: Build intervals
    for (let i = 0; i < n; i++) {
        if (arr[i] !== -1) {
            let left = Math.max(0, i - arr[i]);
            let right = Math.min(n - 1, i + arr[i]);
            intervals.push([left, right]);
        }
    }

    // Step 2: Sort intervals by start
    intervals.sort((a, b) => a[0] - b[0]);

    let count = 0;
    let currentEnd = 0;
    let i = 0;

    // Step 3: Greedy coverage
    while (currentEnd < n) {
        let maxReach = currentEnd;

        while (i < intervals.length && intervals[i][0] <= currentEnd) {
            maxReach = Math.max(maxReach, intervals[i][1] + 1);
            i++;
        }

        if (maxReach === currentEnd) return -1;

        count++;
        currentEnd = maxReach;
    }

    return count;
}


console.log(minPeopleToCover([1,2,1,0]));           // 1
console.log(minPeopleToCover([2,3,4,-1,2,0,0,-1,0])); // -1
console.log(minPeopleToCover([0,1,0,-1]));          // -1
