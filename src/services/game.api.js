import { post, get } from './api';

export default {
  get() {
    return get('/all');
  },
  getUsers() {
    return get('/users');
  },
  add(data) {
    return post('/games', data);
  }
};