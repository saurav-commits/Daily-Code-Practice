function nextGreterElements(arr) {

    let n = arr.length;
    let res = new Array(n).fill(-1);
    let stk = [];

    // traverse array from right to left
    for(let i=n-1; i>=0;i--) {
        //pop elements from stack smaller than or equal to arr[i]
        while(stk.length > 0 && stk[stk.length -1] < arr[i]) {
            stk.pop();
        }
        // if stack is not empty then top element is the NGE
        if(stk.length > 0) {
            res[i] = stk[stk.length -1];
        }
        // push current element to stack
        stk.push(arr[i]);
    }
    return res;
}

let arr = [6,8,0,1,3];
let res = nextGreterElements(arr);
console.log(res);