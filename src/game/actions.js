import * as actions from '../services/constants';

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
      audio: false,
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


export function loadGame() {
  return {
    type: actions.INIT_GAME
  };
}

// export function gameSettings(game) {
//   return {
//     type: actions.GET_SETTINGS,
//     payload: 
//   };
// }