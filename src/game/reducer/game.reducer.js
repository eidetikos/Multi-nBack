import * as actions from '../../app/constants';
import sequencesReducer from './sequences.reducer';

const initState = {
  status: 'pre',
  difficulty: {
    startingN: 1,
    interval: 3000,
  },
  audio: false,
  numVariates: 2,
  sequences: [],
  finalStats: []
};

export default function game(state = initState, { type, payload }) {

  switch(type) {
    // INIT_GAME setting status to pre
    case actions.INIT_GAME:
      return { ...state, status: 'pre' };
    // GET SETTINGS changing difficulty
    case actions.SET_SETTINGS:
      return { 
        ...state,
        difficulty: payload.difficulty, 
        numVariates: payload.numVariates, 
        audio: payload.audio, 
      };
    case actions.INIT_SEQUENCE:
      return {
        ...state,
        status: 'in', 
        sequences: sequencesReducer(state.sequences, { type, payload })
      };
    case actions.NEXT_COMBO:
    case actions.SEQUENCE_OVER:
      return {
        ...state,
        sequences: sequencesReducer(state.sequences, { type, payload })
      };
    case actions.GAME_OVER:
      return {
        ...state,
        sequences: sequencesReducer(state.sequences, { type }),
        status: 'post'
      };
    case actions.WRAP_UP:
      return {
        ...state,
        sequences: sequencesReducer(state.sequences, { type }),
        finalStats: payload
      };
    case actions.LEAVE_GAME:
      return {
        ...state,
        status: null
      };
    default: 
      return state;
  }
}