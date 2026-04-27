function hasValidPath(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dirs = {
        1: [[0, -1], [0, 1]],
        2: [[-1, 0], [1, 0]],
        3: [[0, -1], [1, 0]],
        4: [[0, 1], [1, 0]],
        5: [[0, -1], [-1, 0]],
        6: [[0, 1], [-1, 0]]             
    };

    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;                                   
    while (queue.length) {                                                               
        const [x, y] = queue.shift();
        if (x === m - 1 && y === n - 1) return true;

        for (let [dx, dy] of dirs[grid[x][y]]) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx < 0 || ny < 0 || nx >= m || ny >= n || visited[nx][ny]) continue;

            // Check reverse connection
                for (let [rdx, rdy] of dirs[grid[nx][ny]]) {
                        if (nx + rdx === x && ny + rdy === y) {
                            visited[nx][ny] = true;
                            queue.push([nx, ny]);
                            break;
                        }
                    }
                }
            }

        return false;
    }

    console.log(hasValidPath([[1,1,2]]));
    