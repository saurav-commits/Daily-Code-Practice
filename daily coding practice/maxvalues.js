function maximumValue(n) {
    while (n.toString(2).includes("111")) {
        let binary = n.toString(2);
        let index = binary.indexOf("111");

        // Unset the rightmost bit of this occurrence
        let bitPosition = binary.length - 1 - (index + 2);
        n = n & ~(1 << bitPosition);
    }

    return n;
}