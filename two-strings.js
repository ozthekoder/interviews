function twoStrings(s1, s2) {
  let ret = 'NO';
  const visited = s1
    .split('')
    .reduce((prev, next) => ({ ...prev, [next]: true }), {});

  console.log(visited);
  !s2.split('').forEach((letter) => {
    if (visited[letter]) {
      ret = 'YES';
      return false;
    }
  });

  return ret;
}

console.log(twoStrings('hello', 'world'));
