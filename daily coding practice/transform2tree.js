function solve(node) {
        if (node === null) return 0;

        // Recursively get left and right subtree sums
        let leftSum = solve(node.left);
        let rightSum = solve(node.right);

        // Store original value
        let oldValue = node.data;

        // Update current node
        node.data = leftSum + rightSum;

        // Return total sum including original value
        return oldValue + node.data;
    }

    solve(root);
    return root;