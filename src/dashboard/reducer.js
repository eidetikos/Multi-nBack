import * as actions from '../app/constants';
import { combineReducers } from 'redux';

export const stats = combineReducers({ community, user });

function community(store = {}, { type, payload }) {
  switch (type) {
    case actions.GET_COMMUNITY_STATS:
      return payload;
    default:
      return store;
  }
}

function user(state = {}, { type, payload }) {
  switch(type) {
    case actions.GET_USER_STATS:
      return payload;
    default:
      return state;
  }
}