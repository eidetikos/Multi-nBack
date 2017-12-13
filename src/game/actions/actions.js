import * as actions from '../../app/constants';
import { generateNBack, selectVariates, generateCombos, generateInterval } from './utils';
import deepEqual from 'deep-equal';
import gameApi from '../../services/game.api';

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
      audio: true,
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

    dispatch({ 
      type: actions.SET_SETTINGS,
      payload: { 
        difficulty,
        numVariates 
      }
    });
    dispatch(initSequence(getState));
    nextCombo(getState, dispatch);
  };
}

function initSequence(getState) {

  const { 
    game: { 
      difficulty,
      sequences,
      numVariates 
    }
  } = getState();
  const score = sequences.length;

  const nBack = generateNBack(difficulty, score);
  const variates = selectVariates(numVariates);
  const combos = generateCombos(nBack, score, variates);
  const interval = 9;
  // const interval = generateInterval(difficulty, score);

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

function nextCombo(getState, dispatch) {

  dispatch({ type: actions.NEXT_COMBO });
  
  const { 
    game: {
      sequences
    }
  } = getState();
  const { comboPointer, combos, interval } = sequences[sequences.length - 1];

  if(combos.length - 1 === comboPointer) setTimeout(() => dispatch({ type: actions.SEQUENCE_OVER }), interval); 
  else setTimeout(() => nextCombo(getState, dispatch), interval);
}

export function checkRecall(recalled) {
  return (dispatch, getState) => {
    
    const { 
      game: { sequences }
    } = getState();

    const { nBack, combos, interval } = sequences[sequences.length - 1];
    const targetCombo = combos[combos.length - nBack];

    if(deepEqual(targetCombo, recalled)) {
      dispatch(initSequence(getState));
      nextCombo(getState, dispatch);
    } 
    else wrapUp(getState, dispatch);
  };
}

async function wrapUp(getState, dispatch) {

  const { game } = getState();
  
  const payload = await gameApi.add(game);

  dispatch({ 
    type: actions.GAME_OVER
  });
  dispatch({ 
    type: actions.WRAP_UP,
    payload
  });
}