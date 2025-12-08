// Given an array arr[] of length n used to denote the dimensions of a series of matrices such that the dimension of i'th matrix is arr[i] * arr[i+1]. There are a total of n-1 matrices. Find the most efficient way to multiply these matrices together. 
// Your task is to return the string which is formed of A - Z (only Uppercase) denoting matrices & Brackets( "(" ")" ) denoting multiplication symbols. For example, if n = 11, the matrixes can be denoted as A - K as n <= 26 & multiplication of A and B is denoted as (AB).

// NOTE:

// Each multiplication is denoted by putting open & closed brackets to the matrices multiplied & also, please note that the order of matrix multiplication matters, as matrix multiplication is non-commutative A*B != B*A
// As there can be multiple possible answers, the console would print "true" for the correct string and "false" for the incorrect string. You need to only return a string that performs a minimum number of multiplications.
// Examples:

// Input: arr[] = [40, 20, 30, 10, 30]
// Output: true
// Explanation: Let's divide this into matrix(only 4 are possible) [ [40, 20] -> A, [20, 30] -> B, [30, 10] -> C, [10, 30] -> D ]
// First we perform multiplication of B & C -> (BC), then we multiply A to (BC) -> (A(BC)), then we multiply D to (A(BC)) -> ((A(BC))D)
// So the solution returned the string ((A(BC))D), which performs minimum multiplications. The total number of multiplications are 20*30*10 + 40*20*10 + 40*10*30 = 26,000.
// Input: arr[] = [10, 20, 30]
// Output: true
// Explanation: There is only one way to multiply two matrices: (AB): The cost for the multiplication will be 6000
// Input: arr = [10, 20, 30, 40]
// Output: true
// Explanation: There are two possible ways to multiply three matrices:
// ((AB)C): The cost for the multiplication will be 18,000
// (A(BC)): The cost for the multiplication will be 32,000
// So the solution returned the string ((AB)C), which performs minimum multiplications.
// Constraints:
// 2 ≤ arr.size() ≤ 50
// 1 ≤ arr[i] ≤ 100 

function matrixChainOrder(arr) {
      const n = arr.length;
        const m = Array.from({ length: n }, () => Array(n).fill(0));
        const split = Array.from({ length: n }, () => Array(n).fill(0));

        for (let L = 2; L < n; L++) {
            for (let i = 1; i < n - L + 1; i++) {
                let j = i + L - 1;
                m[i][j] = Infinity;

                for (let k = i; k < j; k++) {
                    let cost = m[i][k] + m[k + 1][j] + arr[i - 1] * arr[k] * arr[j];

                    if (cost < m[i][j]) {
                        m[i][j] = cost;
                        split[i][j] = k;
                    }
                }
            }
        }

        function build(i, j) {
            if (i === j) {
                return String.fromCharCode(65 + i - 1);
            }
            return "(" + build(i, split[i][j]) + build(split[i][j] + 1, j) + ")";
        }

        return build(1, n - 1);
    }

// Example usage:
console.log(matrixChainOrder([40, 20, 30, 10, 30]));