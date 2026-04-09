function intersection(a, b) {
    let i = 0, j = 0;
    let result = [];

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            i++;
        } else if (a[i] > b[j]) {
            j++;
        } else {
            // Avoid duplicates
            if (result.length === 0 || result[result.length - 1] !== a[i]) {
                result.push(a[i]);
            }
            i++;
            j++;
        }
    }

    return result;
}

const a = [1, 2, 4, 5, 6];
const b = [2, 3, 5, 7];
console.log(intersection(a, b));