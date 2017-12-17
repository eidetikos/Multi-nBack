import * as actions from '../app/constants';
import * as stats from '../services/statsApi';


export function getCommunityStats() {
  return async dispatch => {

    const communityStats = await stats.getCommunityStats();
    if(communityStats) dispatch({ 
      type: actions.GET_COMMUNITY_STATS,
      payload: communityStats
    });
  };
}


export function getUserStats() {
  return async dispatch => {

    try {
      const userStats = await stats.getPersonalStats();
      if(userStats) {
        dispatch({
          type: actions.GET_USER_STATS,
          payload: userStats
        });
      }
    }
    catch(error) {
      dispatch({
        type: actions.GET_USER_STATS,
        payload: {}
      });
    }
  };
}
