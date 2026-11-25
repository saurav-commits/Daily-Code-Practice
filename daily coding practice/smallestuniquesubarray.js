/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestUniqueSubarray = function(nums) {
    const n = nums.length;
  const M = (1n << 61n) - 1n;
  const B = BigInt(Math.floor(Math.random() * 1e9)) + 1000003n;

  const h = new Array(n + 1);
  const pw = new Array(n + 1);
  h[0] = 0n;
  pw[0] = 1n;
  for (let i = 0; i < n; i++) {
    h[i + 1] = (h[i] * B + BigInt(nums[i])) % M;
    pw[i + 1] = (pw[i] * B) % M;
  }

  const hasUnique = (L) => {
    const cnt = new Map();
    for (let i = 0; i + L <= n; i++) {
      let v = (h[i + L] - h[i] * pw[L]) % M;
      if (v < 0n) v += M;
      cnt.set(v, (cnt.get(v) || 0) + 1);
    }
    for (const c of cnt.values()) if (c === 1) return true;
    return false;
  };

  let lo = 1, hi = n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (hasUnique(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
};