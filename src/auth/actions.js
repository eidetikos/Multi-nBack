import * as auth from '../services/authApi';
import { getUser } from '../services/meApi';
import * as actions from '../app/constants';
import { getStoreToken } from '../services/api';

export function checkForToken() {
  return dispatch => {
    const token = getStoreToken();
    if(!token) {
      dispatch({ type: actions.CHECKED_TOKEN });
      return;
    }
    dispatch({ type: actions.GOT_TOKEN, payload: token });
    
    return auth.verify()
      .then(() => getUser())
      .then(user => {
        dispatch({ type: actions.SIGN_IN, payload: user });
      })
      .catch(error => {
        dispatch({ type: actions.AUTH_ERROR, payload: error });
      });
  };
}



export function signUp(name, password) {
  return async dispatch => {
   
    try {
      const user = await auth.post('/signup', { name, password });
      
      localStorage.setItem('token', user.token);
      dispatch({
        type: actions.SIGN_IN,
        payload: user.user
      });

      dispatch({
        type: actions.AUTH_ERROR,
        payload: null
      });

    }
    catch(error) {
      dispatch({
        type: actions.AUTH_ERROR,
        payload: error
      });
    }
  };
}

export function signIn(name, password) {
  return async dispatch => {
    
    try {
      const user = await auth.post('/signin', { name, password });
      
      localStorage.setItem('token', user.token);
      dispatch({
        type: actions.SIGN_IN,
        payload: user.user
      });

      dispatch({
        type: actions.AUTH_ERROR,
        payload: null
      });

      
    }
    catch(error) {
      dispatch({
        type: actions.AUTH_ERROR,
        payload: error
      });
    }
  };
}

export function logOut() {

  return dispatch => {
    dispatch({ type: actions.INIT_GAME });
    dispatch({ type: actions.LOG_OUT });
  };
}