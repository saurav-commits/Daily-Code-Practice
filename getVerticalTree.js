// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Build tree from level order array (handles "N")
function buildTree(arr) {
  if (arr.length === 0 || arr[0] === "N") return null;

  let root = new Node(Number(arr[0]));
  let queue = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    let curr = queue.shift();

    // Left child
    if (arr[i] !== "N") {
      curr.left = new Node(Number(arr[i]));
      queue.push(curr.left);
    }
    i++;

    // Right child
    if (i < arr.length && arr[i] !== "N") {
      curr.right = new Node(Number(arr[i]));
      queue.push(curr.right);
    }
    i++;
  }

  return root;
}

// Vertical Traversal
function verticalTraversal(root) {
  if (!root) return [];

  let map = new Map();
  let queue = [[root, 0]];

  let minHD = 0;
  let maxHD = 0;

  while (queue.length) {
    let [node, hd] = queue.shift();

    if (!map.has(hd)) {
      map.set(hd, []);
    }

    map.get(hd).push(node.data);

    minHD = Math.min(minHD, hd);
    maxHD = Math.max(maxHD, hd);

    if (node.left) {
      queue.push([node.left, hd - 1]);
    }

    if (node.right) {
      queue.push([node.right, hd + 1]);
    }
  }

  let result = [];

  for (let i = minHD; i <= maxHD; i++) {
    result.push(map.get(i));
  }

  return result;
}

// ----------------------
// TEST CASE
// ----------------------

let arr = ["1","2","3","4","5","N","6"];

let root = buildTree(arr);

console.log("Vertical Traversal:");
console.log(verticalTraversal(root));