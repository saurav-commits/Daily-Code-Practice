/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    const max = Math.max(...nums);
    let moves = 0;
    for (const x of nums) moves += max - x;
    return moves;
};