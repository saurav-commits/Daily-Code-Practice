function formCoils(n) {
    const N = 4 * n;

    // Create matrix
    const matrix = Array.from({ length: N }, (_, r) =>
        Array.from({ length: N }, (_, c) => r * N + c + 1)
    );

    const coil1 = [];
    const coil2 = [];

    // -------------------------
    // Coil 1
    // -------------------------
    for (let layer = 0; layer < N / 2; layer += 2) {
        const top = layer;
        const left = layer;
        const bottom = N - 1 - layer;
        const right = N - 2 - layer;

        // Down
        for (let r = top; r <= bottom; r++) {
            coil1.push(matrix[r][left]);
        }

        // Right
        for (let c = left + 1; c <= right; c++) {
            coil1.push(matrix[bottom][c]);
        }

        // Up
        for (let r = bottom - 1; r >= top + 1; r--) {
            coil1.push(matrix[r][right]);
        }

        // Left
        for (let c = right - 1; c >= left + 2; c--) {
            coil1.push(matrix[top + 1][c]);
        }
    }

    // -------------------------
    // Coil 2
    // -------------------------
    for (let layer = 0; layer < N / 2; layer += 2) {
        const top = layer;
        const right = N - 1 - layer;
        const bottom = N - 2 - layer;
        const left = layer + 1;

        // Up
        for (let r = right; r >= top; r--) {
            coil2.push(matrix[r][right]);
        }

        // Left
        for (let c = right - 1; c >= left; c--) {
            coil2.push(matrix[top][c]);
        }

        // Down
        for (let r = top + 1; r <= bottom; r++) {
            coil2.push(matrix[r][left]);
        }

        // Right
        for (let c = left + 1; c <= right - 2; c++) {
            coil2.push(matrix[bottom][c]);
        }
    }

    return [coil1, coil2];
}