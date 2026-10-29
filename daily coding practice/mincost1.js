function minCost(files) {
  const h = [];

  const push = (v) => {
    h.push(v);
    let i = h.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (h[p] <= h[i]) break;
      [h[p], h[i]] = [h[i], h[p]];
      i = p;
    }
  };

  const pop = () => {
    const top = h[0];
    const last = h.pop();
    if (h.length) {
      h[0] = last;
      let i = 0;
      while (true) {
        let l = 2 * i + 1, r = l + 1, s = i;
        if (l < h.length && h[l] < h[s]) s = l;
        if (r < h.length && h[r] < h[s]) s = r;
        if (s === i) break;
        [h[s], h[i]] = [h[i], h[s]];
        i = s;
      }
    }
    return top;
  };

  for (const f of files) push(f);

  let total = 0;
  while (h.length > 1) {
    const s = pop() + pop();
    total += s;
    push(s);
  }
  return total;
}