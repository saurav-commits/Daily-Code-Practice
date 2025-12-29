// Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be at the kth position of the combined sorted array.

// Examples :

// Input: a[] = [2, 3, 6, 7, 9], b[] = [1, 4, 8, 10], k = 5
// Output: 6
// Explanation: The final combined sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this array is 6.
// Input: a[] = [1, 4, 8, 10, 12], b[] = [5, 7, 11, 15, 17], k = 6
// Output: 10
// Explanation: Combined sorted array is [1, 4, 5, 7, 8, 10, 11, 12, 15, 17]. The 6th element of this array is 10.
// Constraints:
// 1 ≤ a.size(), b.size() ≤ 106
// 1 ≤ k ≤ a.size() + b.size()
// 0 ≤ a[i], b[i] ≤ 108

// “Since both arrays are sorted, I use binary search to partition them such that exactly k elements lie on the left side. I ensure the partition is valid by checking boundary conditions. Once valid, the kth element is simply the maximum of the left partition.

// You have two sorted lists:

// a = [2, 3, 6, 7, 9]
// b = [1, 4, 8, 10]


// If you merged them, you’d get:

// [1, 2, 3, 4, 6, 7, 8, 9, 10]


// Now the question is:

// 👉 What is the 5th number in this combined order?

// That’s it. Nothing more.

// 2️⃣ The naive way (what your brain naturally wants)

// Your brain says:

// “I’ll merge them and count till k.”

// That works ✅
// But it’s slow and interviewers want something smarter.

// So instead of building the whole merged list, we ask:

// “Can I figure out the 5th element without merging?”

// Yes — that’s where the idea comes in.

// 3️⃣ The BIG idea (this is the breakthrough)
// Instead of merging…

// We split the arrays.

// We want to choose:

// some elements from a

// some elements from b

// So that:

// (total elements chosen) = k

// Example (k = 5)

// Let’s try:

// 3 elements from a

// 2 elements from b

// That makes 5 total.

// a → [2, 3, 6 | 7, 9]
// b → [1, 4 | 8, 10]


// Everything on the left of | is what we “picked”.

// Now combine the picked elements:

// [1, 2, 3, 4, 6]


// 👉 The largest picked element (6) is the answer.

// That’s the core idea.

// 4️⃣ When is a split “correct”?

// A split is correct if:

// Nothing on the left is bigger than something on the right

// In simple words:

// biggest on the left ≤ smallest on the right

// For our example:

// left side max = max(6, 4) = 6
// right side min = min(7, 8) = 7


// ✅ 6 ≤ 7 → good split

// So the kth element = 6

// 5️⃣ Why binary search?

// Now think:

// We don’t know how many to take from a

// It could be:

// 0 from a

// 1 from a

// 2 from a

// …

// But this number is ordered

// If we take:

// too many from a → left side becomes too big

// too few from a → left side too small

// This “too small / too big” behavior is perfect for binary search.

// 👉 We binary search on:

// “How many elements to take from a?”


// Not on values. On counts.

// 6️⃣ Visual summary (VERY IMPORTANT)

// For kth element:

// Take x from a
// Take k - x from b


// Check if:

// a[x-1] <= b[k-x]
// b[k-x-1] <= a[x]


// If true → answer = max(a[x-1], b[k-x-1])




class Solution {
    kthElement(a, b, k) {
        // Ensure a is smaller
        if (a.length > b.length) {
            return this.kthElement(b, a, k);
        }

        let n = a.length;
        let m = b.length;

        let low = Math.max(0, k - m);
        let high = Math.min(k, n);

        while (low <= high) {
            let cutA = Math.floor((low + high) / 2);
            let cutB = k - cutA;

            let leftA = cutA === 0 ? -Infinity : a[cutA - 1];
            let leftB = cutB === 0 ? -Infinity : b[cutB - 1];

            let rightA = cutA === n ? Infinity : a[cutA];
            let rightB = cutB === m ? Infinity : b[cutB];

            if (leftA <= rightB && leftB <= rightA) {
                return Math.max(leftA, leftB);
            } 
            else if (leftA > rightB) {
                high = cutA - 1;
            } 
            else {
                low = cutA + 1;
            }
        }
    }
}


const a = [1, 4, 8, 10, 12];
const b = [5, 7, 11, 15, 17];
const  k = 6;
let output = new Solution();
console.log(output.kthElement(a,b,k));