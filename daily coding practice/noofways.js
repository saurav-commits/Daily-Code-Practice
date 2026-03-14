// You are given an undirected weighted graph with V vertices numbered from 0 to V-1 and E edges, represented as a 2D array edges[][], where edges[i] = [ui, vi, timei] means that there is an undirected edge between nodes ui and vi that takes timei minutes to reach.
// Your task is to return in how many ways you can travel from node 0 to node V - 1 in the shortest amount of time.

class Solution {
    countPaths(V, edges) {
        const MOD = 1e9 + 7;

        // adjacency list
        const adj = Array.from({ length: V }, () => []);
        for (let [u, v, w] of edges) {
            adj[u].push([v, w]);
            adj[v].push([u, w]);
        }

        // min-priority queue (simple)
        const pq = [];
        const push = (item) => {
            pq.push(item);
            pq.sort((a, b) => a[0] - b[0]);
        };

        const dist = Array(V).fill(Infinity);
        const ways = Array(V).fill(0);

        dist[0] = 0;
        ways[0] = 1;

        push([0, 0]); // [distance, node]

        while (pq.length) {
            const [d, u] = pq.shift();
            if (d > dist[u]) continue;

            for (let [v, w] of adj[u]) {
                const nd = d + w;

                if (nd < dist[v]) {
                    dist[v] = nd;
                    ways[v] = ways[u];
                    push([nd, v]);
                } else if (nd === dist[v]) {
                    ways[v] = (ways[v] + ways[u]) % MOD;
                }
            }
        }

        return ways[V - 1] % MOD;
    }
}


// Example usage:const solution = new Solution();
const V = 7;
const edges = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]];
const solution = new Solution();
const result = solution.countPaths(V, edges);
console.log(result); // Output: 4