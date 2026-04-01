function countPaths(V, edges) {
    const MOD = 1e9 + 7;

    // Step 1: Build graph
    const graph = Array.from({ length: V }, () => []);

    for (let [u, v, w] of edges) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    // Step 2: Initialize
    const dist = Array(V).fill(Infinity);
    const ways = Array(V).fill(0);

    dist[0] = 0;
    ways[0] = 1;

    // Min heap: [distance, node]
    const pq = [[0, 0]];

    while (pq.length > 0) {
        // simple min extraction
        pq.sort((a, b) => a[0] - b[0]);
        const [currDist, node] = pq.shift();

        if (currDist > dist[node]) continue;

        for (let [nei, weight] of graph[node]) {
            const newDist = currDist + weight;

            // Case 1: shorter path found
            if (newDist < dist[nei]) {
                dist[nei] = newDist;
                ways[nei] = ways[node];
                pq.push([newDist, nei]);
            }

            // Case 2: another shortest path
            else if (newDist === dist[nei]) {
                ways[nei] = (ways[nei] + ways[node]) % MOD;
            }
        }
    }

    return ways[V - 1];
}

const V = 4, edges = [[0, 1, 2], [1, 2, 3], [0, 3, 5], [1, 3, 3], [2, 3, 4]];
console.log(countPaths(V, edges));
