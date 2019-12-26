function getOverlap(range1, range2) {
  if (range1 && range2) {
    const start = Math.max(range1[0], range2[0]);
    const end = Math.min(range1[1], range2[1]);

    if (start <= end) {
      return [
        Math.max(range1[0], range2[0]),
        Math.min(range1[1], range2[1]),
        range1[2] + range2[2],
      ];
    }
  }
  return false;
}

function arrayManipulation(n, queries) {
  let arr = new Array(2 * n).fill(0);
  let max = 0;

  queries.forEach((item) => {
    console.log('ITEM', item);
    console.log('ARRAY BEFORE', arr);

    arr[item[0]] += item[2];
    arr[item[1] + 1] -= item[2];

    console.log('ARRAY AFTER', arr);
  });

  arr.reduce((prev, curr, idx) => {
    const sum = prev + curr;
    if (sum > max) {
      max = sum;
    }

    return sum;
  });

  return max;
}

function arrayManipulation2(n, queries) {
  const arr = Array(n).fill(0);
  let max = 0;

  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0] - 1; j <= queries[i][1] - 1; j++) {
      arr[j] += queries[i][2];
      max = Math.max(arr[j], max);
    }
  }

  return max;
}

/*console.log(*/
//arrayManipulation(40, [
//[19, 28, 419],
//[4, 23, 680],
//[5, 6, 907],
//[19, 33, 582],
//[5, 9, 880],
//[10, 13, 438],
//[21, 39, 294],
//[13, 18, 678],
//[12, 26, 528],
//[15, 30, 261],
//[8, 9, 48],
//[21, 23, 131],
//[20, 21, 7],
//[13, 40, 65],
//[13, 23, 901],
//[15, 15, 914],
//[14, 35, 704],
//[20, 39, 522],
//[10, 18, 379],
//[16, 27, 8],
//[25, 40, 536],
//[5, 9, 190],
//[17, 20, 809],
//[8, 20, 453],
//[22, 37, 298],
//[19, 37, 112],
//[2, 5, 186],
//[21, 29, 184],
//[23, 30, 625],
//[2, 8, 960],
//])
/*);*/
console.log(
  arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]])
);
