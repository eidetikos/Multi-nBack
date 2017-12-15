import * as actions from '../app/constants';
import * as stats from '../services/statsApi';


export function getCommunityStats() {
  return async dispatch => {

    const communityStats = await stats.getCommunityStats();
    console.log(communityStats);
    if(communityStats) dispatch({ 
      type: actions.GET_COMMUNITY_STATS,
      payload: communityStats
    });
  };
}

