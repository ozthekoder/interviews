function minimumBribes(q) {
  const line = q.map((l) => l-1);
  let count = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] - i > 2) {
      count = 'Too chaotic';
      break;
    }

    for (let j = Math.max(0, line[i] - 2); j < i; j++) {
      if (line[j] > line[i]) {
        count++;
      }
    }
  }

  console.log(count);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
