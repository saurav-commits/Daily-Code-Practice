function addBinary(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    while (i >= 0 || j >= 0 || carry) {
        const sum = (i >= 0 ? +a[i--] : 0) + (j >= 0 ? +b[j--] : 0) + carry;
        result = (sum % 2) + result;
        carry = sum >> 1; // Right shift by 1 is equivalent to Math.floor(sum / 2)
    }
    
    return result;
}
// ```

// ## Explanation with Example

// Let's trace through `addBinary("1010", "1011")`:
// ```
//   1010
// + 1011
// ------

// Step 1 (i=3, j=3): 0 + 1 + 0 = 1, result = "1", carry = 0
// Step 2 (i=2, j=2): 1 + 1 + 0 = 2, result = "01", carry = 1
// Step 3 (i=1, j=1): 0 + 0 + 1 = 1, result = "101", carry = 0
// Step 4 (i=0, j=0): 1 + 1 + 0 = 2, result = "0101", carry = 1
// Step 5 (i=-1, j=-1): 0 + 0 + 1 = 1, result = "10101", carry = 0

// Final result: "10101"
// ```

// ## Binary Addition Rules
// ```
// 0 + 0 = 0 (carry 0)
// 0 + 1 = 1 (carry 0)
// 1 + 0 = 1 (carry 0)
// 1 + 1 = 0 (carry 1)
// 1 + 1 + 1 (with carry) = 1 (carry 1)


// Test cases
console.log(addBinary("11", "1"));       // "100"
console.log(addBinary("1010", "1011"));  // "10101"
console.log(addBinary("0", "0"));        // "0"
console.log(addBinary("1", "1"));        // "10"
console.log(addBinary("1111", "1111")); // "11110"