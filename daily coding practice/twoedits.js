function twoEditWords(queries, dictionary) {
    let result = [];

    for (let q of queries) {

        for (let d of dictionary) {
            let diff = 0;

            // count differences
            for (let i = 0; i < q.length; i++) {
                if (q[i] !== d[i]) {
                    diff++;
                    if (diff > 2) break; // early stop
                }
            }

            if (diff <= 2) {
                result.push(q);
                break; // no need to check further
            }
        }
    }

    return result;
}

// Example usage:
const queries = ["word", "ward", "sword", "world"];
const dictionary = ["ward", "sword", "world", "wold"];
console.log(twoEditWords(queries, dictionary)); // Output: ["word", "ward", "sword", "world"]