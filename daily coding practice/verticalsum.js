const map = new Map();

        // DFS traversal
        function dfs(node, hd) {
            if (!node) return;

            map.set(hd, (map.get(hd) || 0) + node.data);

            // left child -> hd - 1
            dfs(node.left, hd - 1);

            // right child -> hd + 1
            dfs(node.right, hd + 1);
        }

        dfs(root, 0);

        // Sort keys from leftmost to rightmost
        const sortedKeys = [...map.keys()].sort((a, b) => a - b);

        // Prepare answer
        return sortedKeys.map(key => map.get(key));