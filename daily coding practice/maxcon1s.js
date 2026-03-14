function maxconsecutiveOnes(arr) {
    let maxcount=0;
    let currentcount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==1){
            currentcount++;
        }
        else{
            maxcount=Math.max(currentcount,maxcount);
            currentcount=0;
        }
    }
    return Math.max(currentcount,maxcount);
}

const arr = [1,1,0,1,1,1];
console.log(maxconsecutiveOnes(arr));
