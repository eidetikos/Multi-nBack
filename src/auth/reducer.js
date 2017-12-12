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