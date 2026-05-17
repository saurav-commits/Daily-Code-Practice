class Solution {
    makeBeautiful(arr) {
        let st = [];

        for (let num of arr) {

            // If opposite signs, remove previous element
            if (
                st.length > 0 &&
                ((st[st.length - 1] >= 0 && num < 0) ||
                 (st[st.length - 1] < 0 && num >= 0))
            ) {
                st.pop();
            } else {
                st.push(num);
            }
        }

        return st;
    }
}