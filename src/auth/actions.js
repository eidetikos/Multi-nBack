import * as auth from '../services/authApi';

export function signUp(name, password) {
  return async dispatch => {
    const token = await auth.post('/signup', { name, password });
    localStorage.setItem('token', token.token);
  };
}

export function signIn(name, password) {
  return async dispatch => {
    const token = await auth.post('/signin', { name, password });
    localStorage.setItem('token', token.token);
  };
}