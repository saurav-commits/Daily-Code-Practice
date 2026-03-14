function subarraysWithAtMostKDistinct(arr, k) {
    let freq = new Map();
    let left = 0;
    let distinct = 0;
    let result = 0;

    for (let right = 0; right < arr.length; right++) {
        // Add right element
        freq.set(arr[right], (freq.get(arr[right]) || 0) + 1);
        if (freq.get(arr[right]) === 1) {
            distinct++;
        }

        // Shrink window if distinct > k
        while (distinct > k) {
            freq.set(arr[left], freq.get(arr[left]) - 1);
            if (freq.get(arr[left]) === 0) {
                freq.delete(arr[left]);
                distinct--;
            }
            left++;
        }

        // Count valid subarrays ending at right
        result += (right - left + 1);
    }

    return result;
}


const arr = [1, 2, 1, 1, 3, 3, 4, 2, 1];
const k = 2;
console.log(subarraysWithAtMostKDistinct(arr,k));
