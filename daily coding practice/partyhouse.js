/*
 * @param {number[][]} adj
 * @return {number}
 */
class Solution {
    partyHouse(adj) {

        const bfs = (start) => {
            const n = adj.length;
            const dist = new Array(n).fill(-1);

            const queue = [start];
            let front = 0;

            dist[start] = 0;
            let farthest = start;

            while (front < queue.length) {
                const node = queue[front++];

                for (let next of adj[node]) {
                    next = next - 1; // house number -> index

                    if (dist[next] === -1) {
                        dist[next] = dist[node] + 1;
                        queue.push(next);

                        if (dist[next] > dist[farthest]) {
                            farthest = next;
                        }
                    }
                }
            }

            return [farthest, dist[farthest]];
        };

        // Find one end of the diameter
        const [endpoint] = bfs(0);

        // Find the diameter length
        const [, diameter] = bfs(endpoint);

        // Minimum maximum distance
        return Math.ceil(diameter / 2);
    }
}