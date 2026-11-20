function minFlips(s) {
  const n = s.length;
  let mismatch = 0;
  for (let i = 0; i < n; i++) {
    // pattern "0101..." expects '0' at even index, '1' at odd index
    if (Number(s[i]) !== i % 2) mismatch++;
  }
  return Math.min(mismatch, n - mismatch);
}

console.log(minFlips("001"));        // 1
console.log(minFlips("0001010111")); // 2