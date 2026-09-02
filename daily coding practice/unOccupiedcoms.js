function countRejected(n, s) {
    let occupied = 0;
    const seated = new Set();   // customers currently using a computer
    const seen = new Set();     // customers who have already arrived
    let rejectedCount = 0;

    for (const ch of s) {
        if (!seen.has(ch)) {
            // arrival
            seen.add(ch);
            if (occupied < n) {
                occupied++;
                seated.add(ch);
            } else {
                rejectedCount++;
            }
        } else {
            // departure
            if (seated.has(ch)) {
                occupied--;
                seated.delete(ch);
            }
            // if it was rejected, nothing to free
        }
    }

    return rejectedCount;
}

// Tests
console.log(countRejected(3, "GACCBDDBAGEE")); // 1
console.log(countRejected(1, "ABCBAC"));       // 2