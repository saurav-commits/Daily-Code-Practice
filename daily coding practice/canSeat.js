class Solution {
    canSeat(k, seats) {
        const n = seats.length;

        // Check if the current arrangement is already invalid
        for (let i = 1; i < n; i++) {
            if (seats[i] === 1 && seats[i - 1] === 1) {
                return false;
            }
        }

        for (let i = 0; i < n && k > 0; i++) {
            if (seats[i] === 0) {
                const leftEmpty = (i === 0 || seats[i - 1] === 0);
                const rightEmpty = (i === n - 1 || seats[i + 1] === 0);

                if (leftEmpty && rightEmpty) {
                    seats[i] = 1;
                    k--;
                }
            }
        }

        return k <= 0;
    }
}