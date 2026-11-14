function maxEqualSum(s1, s2, s3) {
  let a = s1.reduce((x, y) => x + y, 0);
  let b = s2.reduce((x, y) => x + y, 0);
  let c = s3.reduce((x, y) => x + y, 0);
  let i = 0, j = 0, k = 0;

  while (!(a === b && b === c)) {
    if (a >= b && a >= c) a -= s1[i++];
    else if (b >= a && b >= c) b -= s2[j++];
    else c -= s3[k++];
  }
  return a;
}

console.log(maxEqualSum([3, 2, 1, 1, 1], [4, 3, 2], [2, 5, 4, 1])); // 5
console.log(maxEqualSum([4, 7], [10], [1, 2, 3])); // 0