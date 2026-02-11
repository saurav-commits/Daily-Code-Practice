function minCostToEqualize(heights, cost) {
    const n = heights.length;
    
    const computeCost = (target) => {
        let total = 0;
        for (let i = 0; i < n; i++) {
            total += cost[i] * Math.abs(heights[i] - target);
        }
        return total;
    };
    
    let low = Math.min(...heights);
    let high = Math.max(...heights);
    
    let answer = Number.MAX_SAFE_INTEGER;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        let cost1 = computeCost(mid);
        let cost2 = computeCost(mid + 1);
        
        answer = Math.min(cost1, cost2);
        
        if (cost1 < cost2) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return answer;
}


console.log(minCostToEqualize([1,2,3], [10,100,1000]));
// Output: 120

console.log(minCostToEqualize([7,1,5], [1,1,1]));
// Output: 6
