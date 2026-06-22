class Solution {
    maxArea(height) {
        let left = 0;
        let right = height.length - 1;
        let ans = 0;

        while (left < right) {
            const width = right - left - 1;
            const area = Math.min(height[left], height[right]) * width;

            ans = Math.max(ans, area);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return ans;
    }
}