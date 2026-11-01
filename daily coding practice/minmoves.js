function minMoves(nums) {
  let min = Infinity;
  let sum = 0;
  for (const x of nums) {
    sum += x;
    if (x < min) min = x;
  }
  return sum - nums.length * min;
}

console.log(minMoves([1, 2, 3])); // 3
console.log(minMoves([1, 1, 1])); // 0