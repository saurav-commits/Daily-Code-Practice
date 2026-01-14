function catchThieves(arr, k) {
    let police = [];
    let thieves = [];

    // Store positions
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'P') police.push(i);
        else thieves.push(i);
    }

    let i = 0, j = 0;
    let count = 0;

    // Two pointer matching
    while (i < police.length && j < thieves.length) {
        if (Math.abs(police[i] - thieves[j]) <= k) {
            count++;
            i++;
            j++;
        } 
        else if (thieves[j] < police[i]) {
            j++;
        } 
        else {
            i++;
        }
    }

    return count;
}


console.log(catchThieves(['P','T','T','P','T'], 1)); 
// 2

console.log(catchThieves(['T','T','P','P','T','P'], 2)); 
// 3
