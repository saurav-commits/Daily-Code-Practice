function minDifference(arr, k) {
  const n = arr.length;

  const prefMin = new Array(n + 1).fill(Infinity);   // min of arr[0..i-1]
  const prefMax = new Array(n + 1).fill(-Infinity);
  for (let i = 0; i < n; i++) {
    prefMin[i + 1] = Math.min(prefMin[i], arr[i]);
    prefMax[i + 1] = Math.max(prefMax[i], arr[i]);
  }

  const sufMin = new Array(n + 1).fill(Infinity);    // min of arr[i..n-1]
  const sufMax = new Array(n + 1).fill(-Infinity);
  for (let i = n - 1; i >= 0; i--) {
    sufMin[i] = Math.min(sufMin[i + 1], arr[i]);
    sufMax[i] = Math.max(sufMax[i + 1], arr[i]);
  }

  let ans = Infinity;
  for (let i = 0; i <= n - k; i++) {
    const mn = Math.min(prefMin[i], sufMin[i + k]);
    const mx = Math.max(prefMax[i], sufMax[i + k]);
    ans = Math.min(ans, mx - mn);
  }
  return ans;
}

console.log(minDifference([1, 2, 3, 4, 5], 3));    // 1
console.log(minDifference([2, 3, 1, 4, 6, 7], 3)); // 2