function countNonDecreasingSubarrays(nums, k) {
  const n = nums.length;
  const pre = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + nums[i];

  const st = [];      // prefix-max "records" from l; top (end) is the smallest index
  let bot = 0;        // bottom of the stack = largest index still inside the window
  let sumMax = 0;     // sum of prefix maxima over window [l, r]
  let r = n - 1;
  let ans = 0;

  for (let l = n - 1; l >= 0; l--) {
    // add nums[l] on the left: it absorbs records <= nums[l]
    while (st.length > bot && nums[st[st.length - 1]] <= nums[l]) {
      const p = st.pop();
      const q = st.length > bot ? st[st.length - 1] : r + 1;
      sumMax -= nums[p] * (q - p);
    }
    const q = st.length > bot ? st[st.length - 1] : r + 1;
    sumMax += nums[l] * (q - l);
    st.push(l);

    // shrink the right end until the cost fits in k
    while (sumMax - (pre[r + 1] - pre[l]) > k) {
      if (st[bot] === r) {
        sumMax -= nums[r];
        bot++;
      } else {
        sumMax -= nums[st[bot]];
      }
      r--;
    }
    ans += r - l + 1;
  }
  return ans;
}