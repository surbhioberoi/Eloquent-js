var arrays = [[1, 2, 3], [4, 5], [6]];
function con(a, b) {
  return a.concat(b);
}
arrays.reduce(con);
// → [1, 2, 3, 4, 5, 6]