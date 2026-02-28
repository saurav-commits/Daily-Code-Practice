var concatenatedBinary = function(n) {
    const MOD = 1000000007n;
    
    let result = 0n;
    let bitLength = 0n;
    
    for (let i = 1n; i <= BigInt(n); i++) {
        
        // if i is power of 2
        if ((i & (i - 1n)) === 0n) {
            bitLength++;
        }
        
        result = ((result << bitLength) + i) % MOD;
    }
    
    return Number(result);
};

const n=12;
console.log(concatenatedBinary(n));
