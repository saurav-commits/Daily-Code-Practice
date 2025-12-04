function travelSales(cost) {
const n = cost.length;
    if (n === 0) return 0;
    // defensive: ensure numeric
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        cost[i][j] = Number(cost[i][j]);
        if (!Number.isFinite(cost[i][j]) || cost[i][j] < 0) {
          // if non-finite or negative, still allow but convert NaN -> large number
          cost[i][j] = Number.isFinite(cost[i][j]) ? cost[i][j] : 1e9;
        }
      }
    }

    // if only 1 city, tour is go 0 -> 0 (use given cost[0][0])
    if (n === 1) return cost[0][0];

    const FULL = (1 << n) - 1;
    // dp[mask][i] = minimum cost to reach city i having visited mask
    // Use Array of Float64 arrays for performance
    const dp = Array(1 << n);
    for (let m = 0; m < (1 << n); m++) {
      // initialize row with Infinity
      dp[m] = new Array(n);
      for (let i = 0; i < n; i++) dp[m][i] = Infinity;
    }

    const startMask = 1 << 0;
    dp[startMask][0] = 0;

    // iterate masks that include city 0
    for (let mask = 0; mask <= FULL; mask++) {
      if ((mask & startMask) === 0) continue; // skip masks that don't include start
      for (let u = 0; u < n; u++) {
        if (!(mask & (1 << u))) continue; // u must be in mask
        const cur = dp[mask][u];
        if (!isFinite(cur)) continue; // unreachable state
        // try to go to every city v not yet visited
        for (let v = 0; v < n; v++) {
          if (mask & (1 << v)) continue; // already visited
          const nm = mask | (1 << v);
          const nd = cur + cost[u][v];
          if (nd < dp[nm][v]) dp[nm][v] = nd;
        }
      }
    }

    // all cities visited, return to 0 from any last city i
    let ans = Infinity;
    for (let i = 1; i < n; i++) {
      if (!isFinite(dp[FULL][i])) continue;
      const candidate = dp[FULL][i] + cost[i][0];
      if (candidate < ans) ans = candidate;
    }

    return ans === Infinity ? -1 : ans;
}

console.log(travelSales([[0, 111],
                         [112, 0]])); // → 223      
