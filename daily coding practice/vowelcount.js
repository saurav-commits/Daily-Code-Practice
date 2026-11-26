function vowelCount(s, queries) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const n = s.length;
  const pre = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    pre[i + 1] = pre[i] + (vowels.has(s[i]) ? 1 : 0);
  }

  return queries.map(([l, r]) => pre[r + 1] - pre[l]);
}

// Test
console.log(vowelCount("geeksforgeeks", [[1, 3], [2, 4], [1, 9]])); // [2, 1, 4]
console.log(vowelCount("helloworld", [[0, 4], [5, 9], [0, 9]]));    // [2, 1, 3]