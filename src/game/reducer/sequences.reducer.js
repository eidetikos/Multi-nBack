import * as actions from '../services/constants';


export default function sequences(state = [], { type, payload }) {

  const modCurrentSequence = modify => {
    const pastSequences = state.slice(0, -1);
    let currentSequence = state.slice(-1);

    return pastSequences.concat(modify(currentSequence[0]));
  };
  
  switch(type) {
    case actions.INIT_SEQUENCE:
      return [
        ...state,
        payload
      ];
    case actions.NEXT_COMBO:
      return modCurrentSequence(currentSequence => {
        ++currentSequence.comboPointer;
        return currentSequence;
      });
    case actions.SEQUENCE_OVER:
      return modCurrentSequence(currentSequence => {
        currentSequence.inProgress = false;
        return currentSequence;
      });
    case actions.GAME_OVER:
      return modCurrentSequence(currentSequence => {
        currentSequence.fatal = true;
        return currentSequence;
      });
    
    default: 
      return state;
  }
}