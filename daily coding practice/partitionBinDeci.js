var minPartitions = function(n) {
    let maxDigit = 0;
    
    for (let ch of n) {
        maxDigit = Math.max(maxDigit, Number(ch));
        
        // Early stop if we reach 9
        if (maxDigit === 9) return 9;
    }
    
    return maxDigit;
};

const n = "32";

console.log(minPartitions(n));
