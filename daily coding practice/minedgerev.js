function minEdgeReversals(n, edges, src, dst) {
    // adj[u] = list of [v, weight]  weight=0 -> original direction, 1 -> needs reversal
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        adj[u].push([v, 0]);
        adj[v].push([u, 1]);
    }

    const INF = Infinity;
    const dist = new Array(n + 1).fill(INF);
    dist[src] = 0;

    // Use a simple deque via a doubly linked structure (array works fine here,
    // but for very large inputs consider a proper deque implementation)
    const dq = [src];
    let head = 0; // pointer for front, we'll still use unshift/push carefully

    // Simple approach: use an actual array as deque with push/unshift
    const deque = [src];

    while (deque.length > 0) {
        const u = deque.shift(); // pop from front
        for (const [v, w] of adj[u]) {
            const nd = dist[u] + w;
            if (nd < dist[v]) {
                dist[v] = nd;
                if (w === 0) {
                    deque.unshift(v); // push front
                } else {
                    deque.push(v);    // push back
                }
            }
        }
    }

    return dist[dst] === INF ? -1 : dist[dst];
}

// Example usage:
console.log(minEdgeReversals(3, [[1, 2], [3, 2]], 1, 3)); // 1
console.log(minEdgeReversals(4, [[1, 2], [2, 3], [3, 4]], 1, 4)); // 0