var minimumCost = function(cost) {
    cost.sort((a, b) => b - a);

    let ans = 0;

    for (let i = 0; i < cost.length; i++) {
        // Every 3rd candy is free
        if ((i + 1) % 3 !== 0) {
            ans += cost[i];
        }
    }

    return ans;
};