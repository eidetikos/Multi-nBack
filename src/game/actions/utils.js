


/* generateNBack: notes */
// equation to determine base nBack given difficulty and current score: nBack(diff, score) = 1 + 18 * arctan( diff * score )
// values of diff at given difficulties:
//    easy: 0.006
//    medium: 0.015
//    hard: 0.03
//
// equation to determine random offset given difficulty and current score: randomizer(diff, score) = 300 * diff * arctan( score / ( 552 * diff )) 
export function generateNBack(difficulty, score) {

  let diff = 0;
  if(difficulty === 'easy') diff = 0.006;
  else if(difficulty === 'medium') diff = 0.015;
  else diff = 0.03;
  
  const nBackBase = 1 + 18 * Math.atan(diff * score);
  const randomizer = (Math.random() - Math.random()) * 300 * diff * Math.atan(score / (552 * diff));

  let nBack = Math.floor(nBackBase + randomizer);
  if(nBack < 1) nBack = 1;

  return nBack;
}

/* generateInterval: notes */
// equation to determine interval given difficulty and current score: interval(diff, score) = (max - min) * 0.87 ^ score + min
// values at given difficulties:
//    difficulty     max     min
//    easy:         5000    1000 
//    medium:       3000     500
//    hard:         1000     333 
export function generateInterval(difficulty, score) {
  
  let max, min;
  if(difficulty === 'easy') {
    max = 5000;
    min = 1000;
  }
  else if(difficulty === 'medium') {
    max = 3000;
    min = 500;
  }
  else {
    max = 1000;
    min = 333;
  }

  const interval = Math.floor((max - min) * Math.pow(0.87, score) + min);
  return interval;
}

export function selectVariates(numVariates, audio) {

  const variates = {
    position: false,
    audio: false,
    number: false,
    color: false,
    shape: false
  };

  if(audio !== undefined && audio === false) delete variates.audio;
  console.log('audio???', variates);
  const variateArray = shuffle(Object.keys(variates));
  
  variateArray.forEach((variate, i) => {
    if(i < numVariates) variates[variate] = true;
  });
  console.log(' returned audio???', variates);
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
  audio: [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ],
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

const generateComboLength = (nBack, score) => nBack + Math.random() * (3 * nBack + 2 * Math.pow(1.2, -score));

export function generateCombos(nBack, score, variates, audio) {
  return new Array(Math.floor(generateComboLength(nBack, score)))
    .fill(null)
    .map(ele => ({}))
    .map(combo => {
      
      if(variates.position) combo.position = Math.floor(Math.random() * (variateVars.position.max + 1));
      if(variates.audio) combo.audio = variateVars.audio[Math.floor(Math.random() * variateVars.audio.length)];
      if(variates.number) combo.number = Math.floor(Math.random() * variateVars.number.max + 1);
      if(variates.color) combo.color = variateVars.color[Math.floor(Math.random() * variateVars.color.length)];
      if(variates.shape) combo.shape = variateVars.shape[Math.floor(Math.random() * variateVars.shape.length)];
      return combo;
    });
}