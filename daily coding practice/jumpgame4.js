function canReach(s, minJump, maxJump) {
    const n = s.length;
    const queue = [0];
    let farthest = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        // Range we can explore from current
        let start = Math.max(current + minJump, farthest + 1);
        let end = Math.min(current + maxJump, n - 1);

        for (let i = start; i <= end; i++) {
            if (s[i] === '0') {
                if (i === n - 1) return true;
                queue.push(i);
            }
        }

        farthest = end;
    }

    return n === 1;
}