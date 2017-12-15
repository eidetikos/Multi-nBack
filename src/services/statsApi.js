import { get } from './api';


export function getCommunityStats() {
  return get('/stats/community');
}

export function getPersonalStats() {
  return get('/stats/personal');
}
