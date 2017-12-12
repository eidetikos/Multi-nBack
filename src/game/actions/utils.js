

export function generateNBack(startingN, score) {
  return startingN;
}

export function selectVariates(numVariates) {
  
  const variates = {
    position: false,
    // audio: false,
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

const variateVars = {
  position: {
    max: 8
  },
  // audio: {

  // },
  number: {
    max: 9,
    min: 1
  },
  color: [
    'red', 'green', 'blue', 'yellow', 'orange', 'purple'
  ],
  shape: [
    'circle', 'triangle', 'square', 'diamond', 'star', 'hexagon'
  ]
};

export function generateCombos(nBack, variates) {
  return new Array(Math.floor(nBack + 2))
    .fill(null)
    .map(ele => ({}))
    .map(combo => {
      
      if(variates.position) combo.position = Math.floor(Math.random() * (variateVars.position.max + 1));
      if(variates.number) combo.number = Math.floor(Math.random() * variateVars.number.max + 1);
      if(variates.color) combo.color = variateVars.color[Math.floor(Math.random() * variateVars.color.length)];
      if(variates.shape) combo.shape = variateVars.shape[Math.floor(Math.random() * variateVars.shape.length)];
      
      return combo;
    });
}