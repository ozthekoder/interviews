function decrementArray(arr) {
  return arr.map((n) => n - 1);
}

function minimumSwaps(arr) {
  let count = 0;
  const nums = decrementArray(arr);

  const swapped = {};

  for (let i = 0; i < nums.length; i++) {
    let j = i;
    while (nums[j] !== j && !swapped[nums[j]]) {
      const temp = nums[nums[j]];
      nums[nums[j]] = nums[j];
      swapped[nums[j]] = true;
      nums[j] = temp;
      j = temp;
      count++;
      console.log(nums);
    }
  }
  return count;
}
// [1, 2, 3, 0, 4]
console.log(minimumSwaps([2, 3, 4, 1, 5]));
console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));
