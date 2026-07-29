function conssub(arr) {
  arr sort((a,b) => a-b);
  let count = 1;
  for(let i=1;i<arr.length;i++) {
    if(arr[i] !== arr[i-1]) count++;
  }
  return count;
}