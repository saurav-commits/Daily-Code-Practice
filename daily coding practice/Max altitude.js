// this will help in finding the largest altitude
var largestAltitude = function(gain) {
    let altitude = 0;
    let maxAltitude = 0;

    for (let g of gain) {
        altitude += g;
        maxAltitude = Math.max(maxAltitude, altitude);
    }

    return maxAltitude;
};