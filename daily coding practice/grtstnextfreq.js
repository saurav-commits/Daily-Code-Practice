function nextGreaterFrequency(arr) {
    let n = arr.length;
    let freq = new Map();

    // Step 1: Frequency map
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let ans = new Array(n).fill(-1);
    let stack = []; // stack of indices

    // Step 2: Monotonic stack
    for (let i = 0; i < n; i++) {
        while (
            stack.length &&
            freq.get(arr[i]) > freq.get(arr[stack[stack.length - 1]])
        ) {
            let idx = stack.pop();
            ans[idx] = arr[i];
        }
        stack.push(i);
    }

    return ans;
}
console.log(nextGreaterFrequency([2,1,1,3,2,1]));
// [1, -1, -1, 2, 1, -1]

console.log(nextGreaterFrequency([5,1,5,6,6]));
// [-1, 5, -1, -1, -1]
