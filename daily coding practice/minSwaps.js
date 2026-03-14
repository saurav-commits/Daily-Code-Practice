var minSwaps = function(grid) {
    const n = grid.length;
    const trailing = [];
    
    // Step 1: Count trailing zeros
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = n - 1; j >= 0; j--) {
            if (grid[i][j] === 0) count++;
            else break;
        }
        trailing.push(count);
    }
    
    let swaps = 0;
    
    // Step 2: Try to arrange rows
    for (let i = 0; i < n; i++) {
        let needed = n - i - 1;
        let j = i;
        
        // Find row that satisfies requirement
        while (j < n && trailing[j] < needed) {
            j++;
        }
        
        if (j === n) return -1; // impossible
        
        // Bubble row up
        while (j > i) {
            [trailing[j], trailing[j - 1]] =
            [trailing[j - 1], trailing[j]];
            swaps++;
            j--;
        }
    }
    
    return swaps;
};

const grid = [[0,0,1],[1,1,0],[1,0,0]];
console.log(minSwaps(grid));
