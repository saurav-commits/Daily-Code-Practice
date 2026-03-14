function maxPeopleVisible(arr) {
    let n = arr.length;
    let left = new Array(n).fill(-1);
    let right = new Array(n).fill(n);
    let stack = [];

    // Nearest greater or equal to the left
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            stack.pop();
        }
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    // Clear stack for reuse
    stack = [];

    // Nearest greater or equal to the right
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            stack.pop();
        }
        right[i] = stack.length ? stack[stack.length - 1] : n;
        stack.push(i);
    }

    // Calculate maximum visibility
    let maxVisible = 0;
    for (let i = 0; i < n; i++) {
        let visible =
            (i - left[i] - 1) + (right[i] - i - 1) + 1;
        maxVisible = Math.max(maxVisible, visible);
    }

    return maxVisible;
}
console.log(maxPeopleVisible([6, 2, 5, 4, 5, 1, 6]));
// 6

console.log(maxPeopleVisible([1, 3, 6, 4]));
// 4
