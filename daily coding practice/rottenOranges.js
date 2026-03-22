function orangesRotting(mat) {
    let m = mat.length;
    let n = mat[0].length;

    let queue = [];
    let fresh = 0;

    // Step 1: collect rotten + count fresh
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 2) {
                queue.push([i, j]);
            } else if (mat[i][j] === 1) {
                fresh++;
            }
        }
    }

    // No fresh oranges
    if (fresh === 0) return 0;

    let time = 0;
    let directions = [[1,0], [-1,0], [0,1], [0,-1]];

    // Step 2: BFS
    while (queue.length > 0) {
        let size = queue.length;
        let rottenThisRound = false;

        for (let i = 0; i < size; i++) {
            let [x, y] = queue.shift();

            for (let [dx, dy] of directions) {
                let nx = x + dx;
                let ny = y + dy;

                if (
                    nx >= 0 && ny >= 0 &&
                    nx < m && ny < n &&
                    mat[nx][ny] === 1
                ) {
                    mat[nx][ny] = 2;
                    queue.push([nx, ny]);
                    fresh--;
                    rottenThisRound = true;
                }
            }
        }

        // increase time only if something rotted
        if (rottenThisRound) time++;
    }

    return fresh === 0 ? time : -1;
}

const  mat = [[2, 1, 0, 2, 1], [0, 0, 1, 2, 1], [1, 0, 0, 2, 1]];;
console.log(orangesRotting(mat));
