function subArrayRanges(arr) {
    let n = arr.length;

    function sumSubarrayMins() {
        let stack = [];
        let res = 0;

        for (let i = 0; i <= n; i++) {
            let cur = i < n ? arr[i] : -Infinity;

            while (stack.length && arr[stack[stack.length - 1]] > cur) {
                let mid = stack.pop();
                let left = stack.length ? mid - stack[stack.length - 1] : mid + 1;
                let right = i - mid;
                res += arr[mid] * left * right;
            }
            stack.push(i);
        }
        return res;
    }

    function sumSubarrayMaxs() {
        let stack = [];
        let res = 0;

        for (let i = 0; i <= n; i++) {
            let cur = i < n ? arr[i] : Infinity;

            while (stack.length && arr[stack[stack.length - 1]] < cur) {
                let mid = stack.pop();
                let left = stack.length ? mid - stack[stack.length - 1] : mid + 1;
                let right = i - mid;
                res += arr[mid] * left * right;
            }
            stack.push(i);
        }
        return res;
    }

    return sumSubarrayMaxs() - sumSubarrayMins();
}
console.log(subArrayRanges([1, 2, 3])); 
// 4

console.log(subArrayRanges([-32, 0, -2, 72])); 
// 318
