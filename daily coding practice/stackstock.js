function stockSpan(arr) {
    let n = arr.length;
    let span = new Array(n);
    let stack = []; // will store indices

    for (let i = 0; i < n; i++) {
        // Pop all smaller or equal prices
        while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
            stack.pop();
        }

        // If stack empty, span is i + 1
        span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];

        // Push current index
        stack.push(i);
    }

    return span;
}
console.log(stockSpan([100, 80, 90, 120]));
// [1, 1, 2, 4]

console.log(stockSpan([10, 4, 5, 90, 120, 80]));
// [1, 1, 2, 4, 5, 1]
