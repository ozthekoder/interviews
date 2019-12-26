/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const min = -2147483648;
  const max = 2147483647;
  const digits = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  };

  const negativeSign = '-';
  let isNegative = false;
  const s = str.replace(/\s+/g, '');
  const nums = [];

  if (!digits[s[0]]) {
    return 0;
  } else if (s[0] === negativeSign) {
    isNegative = true;
  } else {
    nums.push(digits[s[0]]);
  }

  s.split('')
    .slice(1)
    .forEach((letter) => {
      if (digits[letter]) {
        nums.push(digits[letter]);
      } else {
        return false;
      }
    });

  if()
  let num = 0;
  nums.forEach((n, i) => {
    
  })
  return nums;
};

console.log(myAtoi('4193 with words'));
