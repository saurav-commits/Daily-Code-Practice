function isValid(s) {
  const n = s.length;
  let i = 0;
  while (i < n) {
    let cx = 0, cy = 0;
    while (i < n && s[i] === 'x') { cx++; i++; }
    while (i < n && s[i] === 'y') { cy++; i++; }
    if (cx === 0 || cx !== cy) return false;
  }
  return true;
}