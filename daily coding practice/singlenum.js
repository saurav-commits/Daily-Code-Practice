// function singleNum(arr){
//     let hash = {};
    
//     for(let i=0;i<arr.length;i++){
//         if(!hash[arr[i]]) {
//             hash[arr[i]] = 1;
//         } else {
//             hash[arr[i]]++;
//         }
//     }

//     for(let i=0;i<arr.length;i++){
//         if(hash[arr[i]] == 1){
//             return arr[i];
//         }
//     }
// }

// using xor

function singleNum(arr){
    let xor =0;
    for(let i=0;i<arr.length;i++){
        xor ^= arr[i];
    }
    return xor;
}

const arr=[4,1,2,1,2];
console.log(singleNum(arr));
