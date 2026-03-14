function countValidSubarrays(arr) {
    let n = arr.length;
    let stack = [];
    let result = 0;

    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            let idx = stack.pop();
            result += i - idx;
        }
        stack.push(i);
    }

    while (stack.length) {
        let idx = stack.pop();
        result += n - idx;
    }

    return result;
}

const arr = [1, 3, 5, 2];
console.log(countValidSubarrays(arr));
