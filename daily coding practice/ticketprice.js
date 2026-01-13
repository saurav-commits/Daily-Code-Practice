function canServeAll(arr) {
 let five = 0;
    let ten = 0;

    for (let bill of arr) {
        if (bill === 5) {
            five++;
        } 
        else if (bill === 10) {
            if (five === 0) return false;
            five--;
            ten++;
        } 
        else { // bill === 20
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }

    return true;

}

console.log(canServeAll([5,5,5,10,20]));   // true
console.log(canServeAll([5,5,10,10,20])); // false
