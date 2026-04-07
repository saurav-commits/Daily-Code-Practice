/**
 * @param {number[][]} men
 * @param {number[][]} women
 * @returns {number[]}
 */
class Solution {
    stableMarriage(men, women) {
        let n = men.length;

        let menPartner = Array(n).fill(-1);
        let womenPartner = Array(n).fill(-1);

        // next[i] → next woman index to propose for man i
        let next = Array(n).fill(0);

        // rank[w][m] → preference rank of man m for woman w
        let rank = Array.from({ length: n }, () => Array(n));

        // Build ranking for women
        for (let w = 0; w < n; w++) {
            for (let i = 0; i < n; i++) {
                rank[w][women[w][i]] = i;
            }
        }

        let freeMen = [];
        for (let i = 0; i < n; i++) freeMen.push(i);

        while (freeMen.length > 0) {
            let m = freeMen.shift();

            let w = men[m][next[m]];
            next[m]++;

            if (womenPartner[w] === -1) {
                // woman is free
                womenPartner[w] = m;
                menPartner[m] = w;
            } else {
                let current = womenPartner[w];

                // check if woman prefers new man
                if (rank[w][m] < rank[w][current]) {
                    womenPartner[w] = m;
                    menPartner[m] = w;

                    menPartner[current] = -1;
                    freeMen.push(current);
                } else {
                    freeMen.push(m);
                }
            }
        }

        return menPartner;
    }
}
const men = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];
const  women = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];
const solution = new Solution();
console.log(solution.stableMarriage(men, women));