import * as actions from '../../services/constants';
import { generateNBack, selectVariates, generateCombos } from './utils';
import deepEqual from 'deep-equal';

this.game = {
  difficulty: {
    initN: 2,
    interval: 1000
  },
  numVariates: 4,
  status: 'in',
  sequences: [{
    variates: {
      position: true,
      number: true,
      // audio: false,
      shape: true,
      color: true
    },
    nBack: 3,
    interval: 1000,
    combos: [{
      position: 6,
      number: 3,
      shape: 'square',
      color: 'red'
    }],
    comboPointer: 0
  }]
};


export function newGame() {
  return {
    type: actions.INIT_GAME
  };
}

export function setSettings(difficulty, numVariates) {
  return (dispatch, getState) => {
    let startingN, interval = null;
    switch(difficulty) {
      case 'easy':
        startingN = 1;
        interval = 100000;
        break;
      case 'medium':
        startingN = 3;
        interval = 2000;
        break;
      case 'hard':
        startingN = 7;
        interval = 1000;
        break;
      default:
    }

    dispatch({ 
      type: actions.SET_SETTINGS,
      payload: { 
        difficulty: { 
          startingN,
          interval
        },
        numVariates 
      }
    });
    dispatch(initSequence(getState));
    nextCombo(getState, dispatch);
  };
}

export function initSequence(getState) {

  const { 
    game: { 
      difficulty: { 
        startingN,
        interval 
      },
      sequences,
      numVariates 
    }
  } = getState();
  const score = sequences.length;

  const nBack = generateNBack(startingN, score);
  const variates = selectVariates(numVariates);
  const combos = generateCombos(nBack, variates);

  const newSequence = {
    variates,
    nBack,
    combos,
    comboPointer: -1,
    interval,
    inProgress: true,
    fatal: false
  };

  return { 
    type: actions.INIT_SEQUENCE,
    payload: newSequence
  };

}

export function nextCombo(getState, dispatch) {

  dispatch({ type: actions.NEXT_COMBO });
  
  const { 
    game: {
      sequences,
      difficulty: { interval } 
    }
  } = getState();
  const { comboPointer, combos } = sequences[sequences.length - 1];

  if(combos.length - 1 === comboPointer) setTimeout(() => dispatch({ type: actions.SEQUENCE_OVER }), interval); 
  else setTimeout(() => nextCombo(getState, dispatch), interval);
}

export function checkRecall(recalled) {
  return (dispatch, getState) => {
    
    const { 
      game: { sequences }
    } = getState();

    const { nBack, combos } = sequences[sequences.length - 1];
    const targetCombo = combos[combos.length - nBack];
    console.log('target', targetCombo);
    console.log('recalled', recalled);
    console.log(deepEqual(targetCombo, recalled));


  };
}