function countTriplets(arr, r) {
  console.log(arr);
  const triplets = {};
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (triplets[arr[i]]) {
      triplets[arr[i]]++;
    } else {
      triplets[arr[i]] = 1;
    }
  }

  const nums = Object.keys(triplets);
  for (let i = 0; i < nums.length; i++) {
  }
  return count;
}

console.log(countTriplets([1, 2, 2, 4], 2));
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3));
console.log(countTriplets([1, 5, 5, 25, 125], 5));
console.log(
  countTriplets(
    [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
    ],
    1
  )
);
console.log(countTriplets([1, 1, 1, 1, 1, 1], 1));
