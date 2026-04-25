function finalArray(arr) {
    const stack = [];

    for (let num of arr) {
        let current = num;

        while (
            stack.length > 0 &&
            current !== null &&
            stack[stack.length - 1] * current < 0
        ) {
            let top = stack[stack.length - 1];

            if (Math.abs(top) > Math.abs(current)) {
                // current destroyed
                current = null;
            } else if (Math.abs(top) < Math.abs(current)) {
                // top destroyed → continue checking
                stack.pop();
            } else {
                // equal → both destroyed
                stack.pop();
                current = null;
            }
        }

        if (current !== null) {
            stack.push(current);
        }
    }

    return stack;
}

// Example usage:
const input = [5, 10, -5];
const result = finalArray(input);
console.log(result); // Output: [5, 10]