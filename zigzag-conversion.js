/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let zigzagged = '';
  if(numRows === 1) return s;
  const mainHop = numRows * 2 - 2;
  for (let i = 0; i < numRows; i++) {
    let hop = numRows * 2 - 2 * (i + 1);
    if (!hop) {
      hop = mainHop;
    }
    let current = i;
    let alternate = true;

    while (current < s.length) {
      zigzagged += s[current];
      if (i === 0 || i === numRows - 1) {
        current = current + hop;
      } else {
        if (alternate) {
          current = current + hop;
        } else {
          current = current + (mainHop - hop);
        }
        alternate = !alternate;
      }
    }
  }

  return zigzagged;
};

console.log(convert('PAYPALISHIRING', 1));
console.log(convert('PAYPALISHIRING', 2));
console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('PAYPALISHIRING', 5));
