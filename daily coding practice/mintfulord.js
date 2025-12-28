// Geek is organizing a party at his house. For the party, he needs exactly n donuts for the guests. Geek decides to order the donuts from a nearby restaurant, which has m chefs and each chef has a rank r.
// A chef with rank r can make 1 donut in the first r minutes, 1 more donut in the next 2r minutes, 1 more donut in the next 3r minutes, and so on.
// For example, a chef with rank 2, can make one donut in 2 minutes, one more donut in the next 4 minutes, and one more in the next 6 minutes. So, it take 2 + 4 + 6 = 12 minutes to make 3 donuts. A chef can move on to making the next donut only after completing the previous one. All the chefs can work simultaneously.
// Since, it's time for the party, Geek wants to know the minimum time required in completing n donuts. Return an integer denoting the minimum time.

// Examples:

// Input: n = 10, rank[] = [1, 2, 3, 4]
// Output: 12
// Explanation: 
// Chef with rank 1, can make 4 donuts in time 1 + 2 + 3 + 4 = 10 mins
// Chef with rank 2, can make 3 donuts in time 2 + 4 + 6 = 12 mins
// Chef with rank 3, can make 2 donuts in time 3 + 6 = 9 mins
// Chef with rank 4, can make 1 donuts in time = 4 minutes
// Total donuts = 4 + 3 + 2 + 1 = 10 and total time = 12 minutes.
// Input: n = 8, rank[] = [1, 1, 1, 1, 1, 1, 1, 1]
// Output: 1
// Explanation: As all chefs are ranked 1, so each chef can make 1 donuts in 1 min.
// Total donuts = 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 8 and total time = 1 minute.
// Constraints:
// 1 ≤ n ≤ 103
// 1 ≤ m ≤ 104
// 1 ≤ rank[i] ≤ 100

class Solution {
    minTime(ranks, n) {
        // code here
         let low = 0;
        let high = Math.max(...ranks) * n * (n + 1) / 2;
        let ans = high;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (this.canMake(mid, n, ranks)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
     canMake(time, n, ranks) {
        let total = 0;

        for (let r of ranks) {
            let t = 0;
            let k = 1;

            while (t + r * k <= time) {
                t += r * k;
                total++;
                k++;
                if (total >= n) return true;
            }
        }

        return total >= n;
    }
}

const ranks = [1, 2, 3, 4];
const  n = 10;
let output = new Solution();
console.log(output.minTime(ranks, n));