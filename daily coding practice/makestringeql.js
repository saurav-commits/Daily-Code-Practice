// You are given:

// Characters a–z → treat them as 0–25

// Transform edges u → v with cost w

// You may apply transformations any number of times → graph paths allowed.

// This means:

// ✔ Build a 26×26 cost graph

// Use Floyd–Warshall to find the minimum cost from every char to every char.

// ✔ For each position i:

// For characters s[i] and t[i], to make them equal, choose a target c (a–z).

// Cost = min over c ( cost(s[i] → c) + cost(t[i] → c) )

// If for all c no valid path exists → return -1.

// Complexity:

// 26³ = very small, fast.

// Per-character cost check O(26)

// Works up to 1e5 length strings.


function minimumCostToMakeIdentical(s, t, transform, cost) {
    const INF = 1e15;
    const n = s.length;

    // Step 1: Create 26x26 matrix with INF
    const dist = Array.from({ length: 26 }, () => Array(26).fill(INF));

    // Distance from a char to itself = 0
    for (let i = 0; i < 26; i++) {
        dist[i][i] = 0;
    }

    // Step 2: Fill given direct transformations
    for (let i = 0; i < transform.length; i++) {
        const u = transform[i][0].charCodeAt(0) - 97;
        const v = transform[i][1].charCodeAt(0) - 97;
        dist[u][v] = Math.min(dist[u][v], cost[i]);
    }

    // Step 3: Floyd–Warshall for all-pairs min cost
    for (let k = 0; k < 26; k++) {
        for (let i = 0; i < 26; i++) {
            for (let j = 0; j < 26; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    let totalCost = 0;

    // Step 4: For every character in strings
    for (let i = 0; i < n; i++) {
        const a = s[i].charCodeAt(0) - 97;
        const b = t[i].charCodeAt(0) - 97;

        if (a === b) continue; // already same

        let best = INF;

        // Try converting both to some character c
        for (let c = 0; c < 26; c++) {
            if (dist[a][c] !== INF && dist[b][c] !== INF) {
                best = Math.min(best, dist[a][c] + dist[b][c]);
            }
        }

        if (best === INF) return -1; // impossible

        totalCost += best;
    }

    return totalCost;
}

console.log(minimumCostToMakeIdentical(
  "abcc",
  "bccc",
  [['a','b'], ['b','c'], ['c','a']],
  [2,1,4]
));   // → 3


