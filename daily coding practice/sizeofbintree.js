function size(root) {
    if(root === null) return 0;
        let queue = [root];
        let count = 0;

        while(queue.length > 0) {
            let current = queue.shift();
            count++; 

            if(current.left) queue.push(current.left);  
            if(current.right) queue.push(current.right);
        }
        return count;
}

// Example usage:

const root = {
    data:1,
    left: { data:2, left:null, right:null },
    right: { data:3, left:null, right:null }
};
console.log(size(root)); // Output: 3