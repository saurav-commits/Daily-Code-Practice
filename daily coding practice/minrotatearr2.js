function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // minimum is on right side
            left = mid + 1;
        } 
        else if (nums[mid] < nums[right]) {
            // minimum is at mid or left side
            right = mid;
        } 
        else {
            // duplicates, cannot decide
            right--;
        }
    }

    return nums[left];
}