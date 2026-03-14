function readBinaryWatch(turnedOn) {

    let result = [];

    // check all possible hours and minutes
    for (let hour = 0; hour < 12; hour++) {

        for (let minute = 0; minute < 60; minute++) {

            let totalBits = countBits(hour) + countBits(minute);

            if (totalBits === turnedOn) {

                // format minute with leading zero
                let minuteStr = minute.toString().padStart(2, '0');

                result.push(`${hour}:${minuteStr}`);
            }
        }
    }

    return result;
}

// count set bits
function countBits(n) {

    let count = 0;

    while (n > 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
}
console.log(readBinaryWatch(1));
