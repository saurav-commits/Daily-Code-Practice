class Solution {
    minDeletions(arr) {
        let lis = [];

        for (let num of arr) {
            let left = 0, right = lis.length;

            while (left < right) {
                let mid = Math.floor((left + right) / 2);

                if (lis[mid] < num)
                    left = mid + 1;
                else
                    right = mid;
            }

            if (left === lis.length)
                lis.push(num);
            else
                lis[left] = num;
        }

        return arr.length - lis.length;
    }
}