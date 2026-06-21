/**
 * @param {string} s
 * @return {string}
 */
function smallestString(s) {
  const n = s.length;

  // total count of each letter in s
  const total = new Array(26).fill(0);
  for (let i = 0; i < n; i++) total[s.charCodeAt(i) - 97]++;

  const seen = new Array(26).fill(false);

  for (let i = 0; i < n; i++) {
    const c = s.charCodeAt(i) - 97;

    // find smallest letter d < c that:
    //  - hasn't appeared before position i (won't worsen the prefix)
    //  - actually exists somewhere in s (you can only swap letters present in s)
    let d = -1;
    for (let k = 0; k < c; k++) {
      if (!seen[k] && total[k] > 0) { d = k; break; }
    }

    if (d !== -1) {
      const cChar = String.fromCharCode(97 + c);
      const dChar = String.fromCharCode(97 + d);
      const arr = s.split('');
      for (let k = 0; k < n; k++) {
        if (arr[k] === cChar) arr[k] = dChar;
        else if (arr[k] === dChar) arr[k] = cChar;
      }
      return arr.join('');
    }

    seen[c] = true;
  }

  return s; // no beneficial swap found
}