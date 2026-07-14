class Solution {
    minX(arr) {
        let need = 0;

        for (let i = arr.length - 1; i >= 0; i--) {
            need = Math.ceil((need + arr[i]) / 2);
        }

        return need;
    }
}