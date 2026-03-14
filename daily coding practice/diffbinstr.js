var findDifferentBinaryString = function(nums) {
    let n = nums.length;
    let result = "";

    for (let i = 0; i < n; i++) {
        result += nums[i][i] === '0' ? '1' : '0';
    }

    return result;
};

const nums = ["01","10"];
console.log(findDifferentBinaryString(nums));
