class Solution {
    minSteps(arr, start, end) {
        // If already at destination
        if (start === end) return 0;

        // Distance array for 0 to 999
        let dist = new Array(1000).fill(Infinity);

        // BFS queue
        let queue = [];

        queue.push([start, 0]);
        dist[start] = 0;

        while (queue.length > 0) {
            let [node, steps] = queue.shift();

            for (let num of arr) {
                let next = (node * num) % 1000;

                // Visit only if not visited with smaller steps
                if (steps + 1 < dist[next]) {
                    dist[next] = steps + 1;

                    // Reached destination
                    if (next === end) {
                        return steps + 1;
                    }

                    queue.push([next, steps + 1]);
                }
            }
        }

        return -1;
    }
}