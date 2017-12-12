import { post, get } from './api';

export default {
  get() {
    return get('/all');
  },
  getUsers() {
    return get('/users');
  },
  // Currently unsure of what I will need to pass into add, but I know I will need to pass in something.
  add(data) {
    return post('/games', data);
  }
};