function isAnagram(s1, s2) {
  let ret = true;
  if (s1.length !== s2.length) {
    return false;
  }

  const dict = s1.split('').reduce((prev, next) => {
    if (prev[next]) {
      prev[next]++;
    } else {
      prev[next] = 1;
    }

    return prev;
  }, {});

  s2.split('').forEach((letter) => {
    if (dict[letter]) {
      dict[letter]--;
    } else {
      ret = false;
    }
  });
  console.log('isAnagram', s1, s2, ret);
  return ret;
}

function extractSubstringsOfLength(s, l) {
  const substrings = [];
  for (let i = 0; i < s.length - l + 1; i++) {
    const subs = s.substring(i, i + l);
    substrings.push(subs);
  }

  return substrings;
}

function sherlockAndAnagrams(s) {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    const substrings = extractSubstringsOfLength(s, i);
    for (let j = 0; j < substrings.length - 1; j++) {
      for (let k = j + 1; k < substrings.length; k++) {
        if (isAnagram(substrings[j], substrings[k])) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(sherlockAndAnagrams('abba'));
console.log(sherlockAndAnagrams('abcd'));
console.log(sherlockAndAnagrams('ifailuhkqq'));
console.log(sherlockAndAnagrams('kkkk'));
