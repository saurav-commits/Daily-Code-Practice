function sumxor(arr){
    let total =0;

    for(let bit =0; bit<32; bit++) {
        let count =0;

        for(let num of arr) {
            if((num >> bit) & 1) {
                count++;
            }
        }

        let count0 = n - count;

        total += count0 * count * (1 << bit);
    }
    return total;
}

// Example usage:
const arr = [1, 2, 3];
const result = sumxor(arr);
console.log(result); // Output: 6