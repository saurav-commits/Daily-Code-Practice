function minCost(s1, s2, costS1, costS2) {
  const n = s1.length, m = s2.length;
  let prev = new Array(m + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    const cur = new Array(m + 1).fill(0);
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        cur[j] = prev[j - 1] + 1;
      } else {
        cur[j] = Math.max(prev[j], cur[j - 1]);
      }
    }
    prev = cur;
  }

  const L = prev[m];
  return (n - L) * costS1 + (m - L) * costS2;
}

console.log(minCost("abcd", "acdb", 10, 20)); // 30
console.log(minCost("ef", "gh", 10, 20));     // 60