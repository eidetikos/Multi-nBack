import * as api from './api';

export const getUser = () => api.get('/me');