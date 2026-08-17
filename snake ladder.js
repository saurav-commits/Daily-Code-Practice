function minThrow(n, lad, sn) {
    const target = n * n;

    // jump[i] = destination if there's a snake/ladder at i
    const jump = new Array(target + 1).fill(0);

    // Ladders
    for (let i = 0; i < lad.length; i += 2) {
        const start = lad[i];
        const end = lad[i + 1];
        jump[start] = end;
    }

    // Snakes
    for (let i = 0; i < sn.length; i += 2) {
        const start = sn[i];
        const end = sn[i + 1];
        jump[start] = end;
    }

    const visited = new Array(target + 1).fill(false);

    // BFS queue: [cell, numberOfThrows]
    const queue = [[1, 0]];
    visited[1] = true;

    let front = 0;

    while (front < queue.length) {
        const [cell, throws] = queue[front++];

        if (cell === target) {
            return throws;
        }

        for (let dice = 1; dice <= 6; dice++) {
            let next = cell + dice;

            if (next > target) {
                break;
            }

            // Take snake/ladder immediately
            if (jump[next] !== 0) {
                next = jump[next];
            }

            if (!visited[next]) {
                visited[next] = true;
                queue.push([next, throws + 1]);
            }
        }
    }

    return -1;
}