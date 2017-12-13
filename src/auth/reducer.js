import * as actions from '../app/constants';

export function user(store = null, { type, payload }) {
  switch (type) {
    case actions.SIGN_IN:
      return payload;
    case actions.LOG_OUT:
      return null;
    default:
      return store;
  }
}

export function userError(state = null, { type, payload }) {
  console.log('user error reducer');
  switch(type) {
    case actions.ERROR:
      return payload;
    case actions.LOADING:
      return null;
    default:
      return state;
  }
}