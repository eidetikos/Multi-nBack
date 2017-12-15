import { post, get } from './api';

export default {
  add(data) {
    return post('/games', data);
  },
  get() {
    return get('/games/all');
  },
  getUsers() {
    return get('/games/users');
  },

  // ### Aggregations ### //


};