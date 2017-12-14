import * as auth from '../services/authApi';
import * as actions from '../app/constants';

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
        type: actions.ERROR,
        payload: null
      });

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
      const user = await auth.post('/signin', { name, password });
      
      localStorage.setItem('token', user.token);
      dispatch({
        type: actions.SIGN_IN,
        payload: user.user
      });

      dispatch({
        type: actions.ERROR,
        payload: null
      });

      
    }
    catch(error) {
      dispatch({
        type: actions.ERROR,
        payload: error
      });
    }
  };
}

export function logOut() {
  return { type: actions.LOG_OUT };
}