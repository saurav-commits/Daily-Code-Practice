function interleaveQueue(q) {
    let n = q.length;
    let half = n / 2;
    let stack = [];

    // Step 1: push first half into stack
    for (let i = 0; i < half; i++) {
        stack.push(q.shift());
    }

    // Step 2: enqueue stack back to queue
    while (stack.length) {
        q.push(stack.pop());
    }

    // Step 3: move first half to back
    for (let i = 0; i < half; i++) {
        q.push(q.shift());
    }

    // Step 4: push first half again into stack
    for (let i = 0; i < half; i++) {
        stack.push(q.shift());
    }

    // Step 5: interleave
    while (stack.length) {
        q.push(stack.pop());
        q.push(q.shift());
    }

    return q;
}

console.log(interleaveQueue([2,4,3,1]));
// [2,3,4,1]

console.log(interleaveQueue([3,5]));
// [3,5]
