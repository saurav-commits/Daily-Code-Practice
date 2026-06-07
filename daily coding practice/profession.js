class Solution {
    profession(level, pos) {
        let x = pos - 1;
        let flips = 0;

        while (x > 0) {
            flips++;
            x &= (x - 1); // remove lowest set bit
        }

        return (flips % 2 === 0) ? "Engineer" : "Doctor";
    }
}