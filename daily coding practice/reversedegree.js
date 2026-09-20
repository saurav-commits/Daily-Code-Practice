/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let total = 0;
  for (let i = 0; i < s.length; i++) {
    const rev = 26 - (s.charCodeAt(i) - 97); // 'a' -> 26, 'z' -> 1
    total += rev * (i + 1);
  }
  return total;
};