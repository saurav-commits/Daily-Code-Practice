function largestSwap(s) {
    let arr = s.split('');
    let last = new Array(10).fill(-1);

    // store last occurrence
    for (let i = 0; i < arr.length; i++) {
        last[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {

        // check bigger digits
        for (let d = 9; d > arr[i]; d--) {

            if (last[d] > i) {
                // swap
                [arr[i], arr[last[d]]] = [arr[last[d]], arr[i]];
                return arr.join('');
            }
        }
    }

    return s;
}

const s = "768";
console.log(largestSwap(s));

