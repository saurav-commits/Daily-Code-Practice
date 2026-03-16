class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function pathSum(root, k) {
  const prefix = new Map();
  prefix.set(0, 1);

  let count = 0;

  function dfs(node, currSum) {
    if (!node) return;

    currSum += node.data;

    if (prefix.has(currSum - k)) {
      count += prefix.get(currSum - k);
    }

    prefix.set(currSum, (prefix.get(currSum) || 0) + 1);

    dfs(node.left, currSum);
    dfs(node.right, currSum);

    prefix.set(currSum, prefix.get(currSum) - 1);
  }

  dfs(root, 0);

  return count;
}

/* ---------- TEST TREE ---------- */

const root = new Node(8);

root.left = new Node(4);
root.right = new Node(5);

root.left.left = new Node(3);
root.left.right = new Node(2);

root.left.left.left = new Node(3);
root.left.left.right = new Node(-2);

root.left.right.right = new Node(1);

root.right.right = new Node(2);

/* ---------- RUN TEST ---------- */

const k = 7;

console.log("Paths with sum =", k, ":", pathSum(root, k));