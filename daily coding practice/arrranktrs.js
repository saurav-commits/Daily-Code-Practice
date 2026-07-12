/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    if(arr.length ===0) return [];

    const sortedUnique = [...new Set(arr)].sort((a,b) => a-b);

    const rankMap = {};

    sortedUnique.forEach((num, index) => {
        rankMap[num] = index + 1;
    });

    return arr.map(num => rankMap[num]);
};