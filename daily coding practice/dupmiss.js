function finsmissdup(arr) {
    let missing = -1;
    let duplicate = -1;
    for(let i=0; i<arr.length; i++) {
        let index = Math.abs(arr[i]);
        if(arr[index - 1] < 0) {
            duplicate = index;
        } else {
            arr[index - 1] = -arr[index - 1];
        }       
    }
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > 0) {
            missing = i + 1;
            break;
        }
    }
    return {duplicate, missing};
}

console.log(finsmissdup([3, 1, 3, 4, 2])); // {duplicate: 3, missing: 5}