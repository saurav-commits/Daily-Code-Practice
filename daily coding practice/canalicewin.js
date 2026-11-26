/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    let remove = 10;
  let alice = true;

  while (n >= remove && remove > 0) {
    n -= remove;
    remove--;
    alice = !alice;
  }

  // alice is true means it's Alice's turn and she can't move
  return !alice;
};