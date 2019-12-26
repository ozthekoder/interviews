function isFinished(arr) {
  if (arr.length % 5) return false;

  arr.sort();
  console.log(arr)
  let prev = arr[0];
  let count = 0;
  for (let i = 1; i < arr.length; i++) {

    prev = arr[i];
    count = (count + 1 );
    if()
  }

  return true;
}

// 1 2 3 4 5 2 3 4 5 6
console.log(isFinished([1, 5, 4, 3, 6, 2, 4, 5, 3, 6]));
console.log(isFinished([1, 5, 4, 3, 2]));
