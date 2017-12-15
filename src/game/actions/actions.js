import * as actions from '../../app/constants';
import { generateNBack, selectVariates, generateCombos, generateInterval } from './utils';
import deepEqual from 'deep-equal';
import gameApi from '../../services/game.api';


export function newGame() {
  return {
    type: actions.INIT_GAME
  };
}

export function setSettings(difficulty, numVariates, audio) {
  
  return (dispatch, getState) => {
    dispatch({ 
      type: actions.SET_SETTINGS,
      payload: { 
        difficulty,
        numVariates,
        audio
      }
    });
    dispatch(initSequence(getState));
    nextCombo(getState, dispatch);
  };
}

export function initSequence(getState) {

  const { 
    game: { 
      difficulty,
      sequences,
      audio,
      numVariates 
    }
  } = getState();
  const score = sequences.length;
  // console.log('numVariates in initSequences', selectVariates(numVariates, audio));
  const nBack = generateNBack(difficulty, score);
  const variates = selectVariates(numVariates, audio);
  const combos = generateCombos(nBack, score, variates);
  // const interval = generateInterval(difficulty, score);
  const interval = 9;

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

    const { nBack, combos } = sequences[sequences.length - 1];
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
  dispatch({ 
    type: actions.GAME_OVER
  });

  const payload = await gameApi.add(game);
  
  console.log('here is the getState', getState());
  dispatch({ 
    type: actions.WRAP_UP,
    payload
  });
}

export function replay() {
  return (dispatch, getState) => {
    dispatch(initSequence(getState));
    nextCombo(getState, dispatch);
  };
} 