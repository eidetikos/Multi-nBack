import * as api from './api';

export const getUser = () => {
  return api.get('/me');
};