import * as actions from '../../services/constants';
import sequencesReducer from './sequences.reducer';

const initState = {
  status: null,
  difficulty: {
    startingN: 0,
    interval: 3000
  },
  numVariates: 2,
  sequences: [],
};

export default function game(state = initState, { type, payload }) {

  switch(type) {
    // INIT_GAME setting status to pre
    case actions.INIT_GAME:
      return { ...state, status: 'pre' };
    // GET SETTINGS changing difficulty
    case actions.GET_SETTINGS:
      return { ...state, difficulty: payload.difficulty, numVariates: payload.numVariates, status: 'in' };
    case actions.INIT_SEQUENCE:
    case actions.NEXT_COMBO:
    case actions.SEQUENCE_OVER:
      return {
        ...state,
        sequences: sequencesReducer(state.sequences, { type, payload })
      };
    case actions.GAME_OVER:
      return {
        ...state,
        sequences: sequencesReducer(state.sequences, { type, payload }),
        status: 'post'
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