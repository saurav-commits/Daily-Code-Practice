var numSpecial = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    
    const rowCount = new Array(m).fill(0);
    const colCount = new Array(n).fill(0);
    
    // Count 1s in rows and columns
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }
    
    let result = 0;
    
    // Check special positions
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1) {
                result++;
            }
        }
    }
    
    return result;
};

const mat = [[1,0,0],[0,1,0],[0,0,1]];
console.log(numSpecial(mat));

