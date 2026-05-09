function countSpanningTrees(n, edges) {

    // special case
    if (n === 1) return 1;

    // ---------- build Laplacian ----------
    let L = Array.from(
        { length: n },
        () => Array(n).fill(0)
    );

    for (let [u, v] of edges) {

        L[u][u]++;
        L[v][v]++;

        L[u][v] = -1;
        L[v][u] = -1;
    }

    // ---------- build minor ----------
    let matrix = [];

    for (let i = 0; i < n - 1; i++) {

        let row = [];

        for (let j = 0; j < n - 1; j++) {
            row.push(L[i][j]);
        }

        matrix.push(row);
    }

    // ---------- determinant ----------
    function determinant(mat) {

        let size = mat.length;

        // base case
        if (size === 1) {
            return mat[0][0];
        }

        if (size === 2) {
            return (
                mat[0][0] * mat[1][1] -
                mat[0][1] * mat[1][0]
            );
        }

        let det = 0;

        for (let col = 0; col < size; col++) {

            // build submatrix
            let sub = [];

            for (let i = 1; i < size; i++) {

                let row = [];

                for (let j = 0; j < size; j++) {

                    if (j !== col) {
                        row.push(mat[i][j]);
                    }
                }

                sub.push(row);
            }

            det +=
                ((col % 2 === 0) ? 1 : -1) *
                mat[0][col] *
                determinant(sub);
        }

        return det;
    }

    return determinant(matrix);
}

// Example usage:
let n = 4;
let edges = [   
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 3]
];
console.log(countSpanningTrees(n, edges)); // Output: 3
