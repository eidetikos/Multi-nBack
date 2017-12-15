import * as api from './api';

export const post = (path, data) => api.post(`/auth${path}`, data);

export const verify = () => {
  return api.get('/auth/verify');
};
