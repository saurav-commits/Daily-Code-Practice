class Solution {

    isPalindrome(str, i, j) {
        while (i < j) {
            if (str[i] !== str[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    palindromePair(arr) {

        let map = new Map();

        // Store word -> index
        for (let i = 0; i < arr.length; i++) {
            map.set(arr[i], i);
        }

        for (let i = 0; i < arr.length; i++) {

            let word = arr[i];
            let len = word.length;

            // Try every split
            for (let j = 0; j <= len; j++) {

                let left = word.substring(0, j);
                let right = word.substring(j);

                // Case 1:
                // left is palindrome
                if (this.isPalindrome(left, 0, left.length - 1)) {

                    let revRight = right.split('').reverse().join('');

                    if (map.has(revRight) && map.get(revRight) !== i) {
                        return true;
                    }
                }

                // Case 2:
                // right is palindrome
                // avoid duplicate checking when j == len
                if (j !== len &&
                    this.isPalindrome(right, 0, right.length - 1)) {

                    let revLeft = left.split('').reverse().join('');

                    if (map.has(revLeft) && map.get(revLeft) !== i) {
                        return true;
                    }
                }
            }
        }

        return false;
    }
}