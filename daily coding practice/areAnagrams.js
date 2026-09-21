class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function areAnagrams(root1, root2) {
  if (!root1 || !root2) return root1 === root2; // both null -> true

  let level1 = [root1];
  let level2 = [root2];

  while (level1.length && level2.length) {
    if (level1.length !== level2.length) return false;

    const freq = new Map();
    const next1 = [];
    const next2 = [];

    for (let i = 0; i < level1.length; i++) {
      const a = level1[i];
      const b = level2[i];

      freq.set(a.data, (freq.get(a.data) || 0) + 1);
      freq.set(b.data, (freq.get(b.data) || 0) - 1);

      if (a.left) next1.push(a.left);
      if (a.right) next1.push(a.right);
      if (b.left) next2.push(b.left);
      if (b.right) next2.push(b.right);
    }

    for (const count of freq.values()) {
      if (count !== 0) return false;
    }

    level1 = next1;
    level2 = next2;
  }

  // Both must be exhausted at the same time
  return level1.length === level2.length;
}