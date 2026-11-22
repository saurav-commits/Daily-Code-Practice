function longestSubarrayDivK(arr, k) {
    const first = new Map();
    first.set(0, -1);
    let sum = 0, ans = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = ((sum + arr[i]) % k + k) % k;  // JS % can be negative
        if (first.has(sum)) {
            ans = Math.max(ans, i - first.get(sum));
        } else {
            first.set(sum, i);
        }
    }
    return ans;
}