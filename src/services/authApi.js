import * as api from './api';

export const post = data => api.post('/auth', data);