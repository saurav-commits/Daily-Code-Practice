function permutations(arr) {
    let result = [];

    function backtrack(index) {
        // Base case
        if (index === arr.length) {
            result.push([...arr]);
            return;
        }

        for (let i = index; i < arr.length; i++) {
            // swap
            [arr[index], arr[i]] = [arr[i], arr[index]];

            backtrack(index + 1);

            // backtrack (undo swap)
            [arr[index], arr[i]] = [arr[i], arr[index]];
        }
    }

    backtrack(0);
    return result;
}

console.log(permutations([1,2,3]));
// [
//  [1,2,3], [1,3,2],
//  [2,1,3], [2,3,1],
//  [3,1,2], [3,2,1]
// ]

console.log(permutations([1,3]));
// [[1,3], [3,1]]
