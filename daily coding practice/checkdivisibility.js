/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let num = n;
        let sum = 0;
        let product = 1;

        while (num > 0) {
            const digit = num % 10;

            sum += digit;
            product *= digit;

            num = Math.floor(num / 10);
        }

        return n % (sum + product) === 0;
};