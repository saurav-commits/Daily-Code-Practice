class Solution {
    isBSTPreorder(arr) {
        let stack = [];
        let root = -Infinity;

        for (let val of arr) {
            if (val < root) return false;

            while (stack.length && val > stack[stack.length - 1]) {
                root = stack.pop();
            }

            stack.push(val);
        }

        return true;
    }
}