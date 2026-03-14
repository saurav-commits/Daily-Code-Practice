//  shift zeroes to the last position of the array
//  [0,1,0,2,3,12,0] -> [1, 2, 3, 12, 0, 0, 0]


function shiftZeros(nums){
    let x=0;
    for(let i=0; i<nums.length;i++){
        if(nums[i]!==0){
            nums[x]=nums[i];
            x++;
        }
    }

    for(let i=x; i<nums.length; i++){
        nums[i]=0;
    }

    return nums;
}

const nums=[0,1,0,2,3,12,0];
console.log(shiftZeros(nums));
