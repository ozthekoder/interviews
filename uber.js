function getNameById(input, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 1000) + 2000;

  setTimeout(() => {
    callback('User' + input);
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  const allResults = new Array(inputs.length);
  const fetching = new Array(inputs.length);
  let i;
  const cb = (index, result) => {
    console.log('FETHCING', fetching);
    allResults[index] = result;
    fetching[index] = false;
    if (i < inputs.length) {
      if (!fetching[i] && !allResults[i]) {
        iterateeFn(inputs[i], cb.bind(null, i));
        fetching[i] = true;
        i++;
      }
    } else {
      callback(allResults);
    }
  };

  for (i = 0; i < limit; i++) {
    fetching[i] = true;
    iterateeFn(inputs[i], cb.bind(null, i));
  }
}

mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log(allResults); // ["User1", "User2", "User3", "User4", "User5"]
});
