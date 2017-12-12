import * as auth from '../services/authApi';

export function signUp(name, password) {
  return async dispatch => {
    const token = await auth.post({ name, password });
    console.log(token);
  };
}