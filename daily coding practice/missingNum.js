function missingNumber(arr){
    let n = arr.length;
    let totalSum=(n+1)*(n+2)/2;
    
    let arrSum=0;
    for(let i=0; i<n; i++){
        arrSum += arr[i];
    }
    return totalSum-arrSum;
}

const arr = [3,1,4,6,2];
console.log(missingNumber(arr));

