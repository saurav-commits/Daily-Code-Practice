/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
        const freq = new Array(10).fill(0);

        for (const digit of digits) {
            freq[digit]++;
        }

        let count = 0;

        for (let num = 100; num <= 999; num += 2) {
            let n = num;

            const ones = n % 10;
            n = Math.floor(n / 10);

            const tens = n % 10;
            n = Math.floor(n / 10);

            const hundreds = n;

            // Check if required digits are available
            const needed = new Array(10).fill(0);

            needed[ones]++;
            needed[tens]++;
            needed[hundreds]++;

            let possible = true;

            for (let d = 0; d <= 9; d++) {
                if (needed[d] > freq[d]) {
                    possible = false;
                    break;
                }
            }

            if (possible) {
                count++;
            }
        }

        return count;
    }
