class Solution {
    isProduct(arr, target) {
        let set = new Set();

        for (let num of arr) {

            // Handle zero separately
            if (num === 0) {
                if (target === 0) {
                    return true;
                }
            } else {

                // num should divide target
                if (target % num === 0) {
                    let need = target / num;

                    if (set.has(need)) {
                        return true;
                    }
                }
            }

            set.add(num);
        }

        return false;
    }
}