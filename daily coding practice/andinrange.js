function andInRange(l,r) {
     let shift = 0;

    // Find common prefix
    while (l !== r) {
        l >>= 1;
        r >>= 1;
        shift++;
    }

    // Shift back the common prefix
    return l << shift;
}
console.log(andInRange(8, 13));  // → 4


