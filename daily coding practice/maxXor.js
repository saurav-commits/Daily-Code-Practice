function maxXorSubArray(arr, k) {
    let n = arr.length;
    if(n<k) return 0;
    let windowXor=0;
    for(let i=0;i<k;i++){
        windowXor ^= arr[i];
    }

    let maxXor = windowXor;
    for(let i=k;i<n;i++){
        windowXor ^= arr[i-k];
        windowXor ^= arr[i];
        maxXor = Math.max(maxXor, windowXor);
    }
    return maxXor;
}

const arr = [2,5,6,8,1,1,3];
const k=3;
console.log(maxXorSubArray(arr,k));

