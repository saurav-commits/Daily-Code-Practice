let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let trans=[];
for(let i=0; i<mat[0].length; i++) {
    let row = [];
    for(let j=0; j<mat.length; j++) {
        row.push(mat[j][i]);
    }
    trans.push(row);
}       
console.log(trans);