function countSubsets(arr, k) {
    let n = arr.length;
    let mid = Math.floor(n / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    function getSubsetSums(nums) {
        let sums = [];
        let m = nums.length;

        for (let mask = 0; mask < (1 << m); mask++) {
            let sum = 0;
            for (let i = 0; i < m; i++) {
                if (mask & (1 << i)) {
                    sum += nums[i];
                }
            }
            sums.push(sum);
        }
        return sums;
    }

    let leftSums = getSubsetSums(left);
    let rightSums = getSubsetSums(right);

    // Count frequency of right sums
    let freq = new Map();
    for (let s of rightSums) {
        freq.set(s, (freq.get(s) || 0) + 1);
    }

    let count = 0;
    for (let s of leftSums) {
        let need = k - s;
        if (freq.has(need)) {
            count += freq.get(need);
        }
    }

    return count;
}


console.log(countSubsets([1, 3, 2], 3));        // 2
console.log(countSubsets([4, 2, 3, 1, 2], 4));  // 3
console.log(countSubsets([10, 20, 30], 25));   // 0
console.log(countSubsets([-1, 1], 0));         // 2
