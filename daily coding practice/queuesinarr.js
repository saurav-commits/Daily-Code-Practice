class kQueues {
    constructor(n, k) {
        this.n = n;
        this.k = k;

        this.arr = new Array(n);
        this.front = new Array(k).fill(-1);
        this.rear = new Array(k).fill(-1);
        this.next = new Array(n);

        // Initialize free list
        for (let i = 0; i < n - 1; i++) {
            this.next[i] = i + 1;
        }
        this.next[n - 1] = -1;

        this.free = 0;
    }

    enqueue(x, i) {
        if (this.free === -1) return; // array full

        let index = this.free;
        this.free = this.next[index];

        if (this.front[i] === -1) {
            this.front[i] = index;
        } else {
            this.next[this.rear[i]] = index;
        }

        this.next[index] = -1;
        this.rear[i] = index;
        this.arr[index] = x;
    }

    dequeue(i) {
        if (this.front[i] === -1) return -1;

        let index = this.front[i];
        this.front[i] = this.next[index];

        // add index back to free list
        this.next[index] = this.free;
        this.free = index;

        if (this.front[i] === -1) {
            this.rear[i] = -1;
        }

        return this.arr[index];
    }

    isEmpty(i) {
        return this.front[i] === -1;
    }

    isFull() {
        return this.free === -1;
    }
}

let n = 4, k = 2, q = 8;
const queries = [
    [1, 5, 0],
    [1, 3, 0],
    [1, 1, 1],
    [2, 0],
    [1, 4, 1],
    [1, 1, 0],
    [3, 1],
    [4]
];

const kq = new kQueues(n, k);
let output = [];

for (let query of queries) {
    if (query[0] === 1) {
        // enqueue(x, i)
        let x = query[1];
        let i = query[2];
        kq.enqueue(x, i);
    } 
    else if (query[0] === 2) {
        // dequeue(i)
        let i = query[1];
        output.push(kq.dequeue(i));
    } 
    else if (query[0] === 3) {
        // isEmpty(i)
        let i = query[1];
        output.push(kq.isEmpty(i));
    } 
    else if (query[0] === 4) {
        // isFull()
        output.push(kq.isFull());
    }
}

console.log(output);

