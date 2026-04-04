var decodeCiphertext = function(encodedText, rows) {
    if (rows === 1) return encodedText;

    let n = encodedText.length;
    let cols = Math.floor(n / rows);

    // Build matrix
    let matrix = Array.from({ length: rows }, () => Array(cols));

    let index = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = encodedText[index++];
        }
    }

    // Read diagonally
    let result = "";

    for (let startCol = 0; startCol < cols; startCol++) {
        let i = 0, j = startCol;

        while (i < rows && j < cols) {
            result += matrix[i][j];
            i++;
            j++;
        }
    }

    // Remove trailing spaces
    return result.trimEnd();
};

const encodedText = "ch   ie   pr", rows = 3;
console.log(decodeCiphertext(encodedText, rows));