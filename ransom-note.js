function checkMagazine(magazine, note) {
  const dict = magazine.reduce((prev, next) => {
    if (prev[next]) {
      prev[next]++;
    } else {
      prev[next] = 1;
    }
    return prev;
  }, {});

  const wordsNeeded = note;
  let word;

  for (let i = 0; i < wordsNeeded.length; i++) {
    if (!dict[wordsNeeded[i]]) {
      console.log('No');
      return;
    } else {
      dict[wordsNeeded[i]]--;
    }
  }

  console.log('Yes');
}

checkMagazine('give me one grand today night', 'give one grand today');
checkMagazine('two times three is not four', 'two times two is four');
checkMagazine('ive got a lovely bunch of coconuts', 'ive got some coconuts');
