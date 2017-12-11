

export function generateNBack(startingN, score) {
  return startingN;
}

export function selectVariates(numVariates) {
  
  const variates = {
    position: false,
    audio: false,
    number: false,
    color: false,
    shape: false
  };

  const variateArray = shuffle(Object.keys(variates));
  variateArray.forEach((variate, i) => {
    if(i < numVariates) variates[variate] = true;
  });
  return variates;
}

// Fisher-Yates shuffle: stackoverflow, CoolAJ86
export function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}