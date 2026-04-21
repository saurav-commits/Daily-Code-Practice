function  minSteps(m, n, d) {
        // Step 1: GCD function
        function gcd(a, b) {
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }
        
        // Step 2: Simulate process
        function pour(fromChap, toChap) {
            let from = fromChap; // fill first jug
            let to = 0;          // second jug empty
            let steps = 1;       // first fill
            
            while (from !== d && to !== d) {
                // pour from -> to
                let temp = Math.min(from, toChap - to);
                from -= temp;
                to += temp;
                steps++;
                
                // check goal
                if (from === d || to === d) break;
                
                // if from becomes empty => refill it
                if (from === 0) {
                    from = fromChap;
                    steps++;
                }
                
                // if to becomes full => empty it
                if (to === toChap) {
                    to = 0;
                    steps++;
                }
            }
            
            return steps;
        }
        
        // Step 3: Main function (this is the main function code)
        // check if possible
        if (d > Math.max(m, n)) return -1;
        if (d % gcd(m, n) !== 0) return -1;
        
        // try both ways
        return Math.min(pour(m, n), pour(n, m));
    }

// Example usage:
let m = 3, n = 5, d = 4;
console.log(minSteps(m, n, d)); // Output: 6