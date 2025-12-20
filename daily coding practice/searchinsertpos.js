let arr=[1,3,5,6];
let k=2;
function searchInsert(arr,k){
    if(k>arr[arr.length-1]) return arr.length;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=k) return i;
    }
}


console.log(searchInsert(arr,k));