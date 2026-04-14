function removeSpace(str) {
    let result = '';
    for(let char of str) {
        if(char !== ' ') {
            result += char;
        }
    }
    return result;
}

const input = "Hello World";
console.log(removeSpace(input));