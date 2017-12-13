import * as auth from '../services/authApi';
import * as actions from '../app/constants';

export function signUp(name, password) {
  return async dispatch => {
    try {
      const token = await auth.post('/signup', { name, password });
      localStorage.setItem('token', token.token);
    }
    catch(error) {
      dispatch({
        type: actions.ERROR,
        payload: error
      });
    }
  };
}

export function signIn(name, password) {
  return async dispatch => {
    
    try {
      const token = await auth.post('/signin', { name, password });
      localStorage.setItem('token', token.token);
    }
    catch(error) {
      dispatch({
        type: actions.ERROR,
        payload: error
      });
    }
  };
}