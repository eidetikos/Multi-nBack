import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserStats from './UserStats';
import HighestN from './communityStats/HighestN';
import MostRecalled from './communityStats/MostRecalled';
import TopScore from './communityStats/TopScore';
import { getCommunityStats } from './actions';

import './Dashboard.css';

class Dashboard extends PureComponent {

  componentDidMount() { 
    this.props.getCommunityStats();
  }
  render() {
    console.log(this.props.stats);
    const { user, stats } = this.props;
    console.log(user)
    return (
      <main className="dashboard">
        
        {user &&
          <UserStats/>
        }
        <section 
          className="stats community-stats"
          style={{
            width: user ? '63%' : '90%',
            float: user ? 'right' : 'center',
            margin: user ? '2.5% 2.5% 2.5% 0' : '0 auto'
          }}
        >
          <h2>community stats</h2>
          <div className="community-leaderboards">
            <HighestN leaderboard={stats.highestNBackPerDifficulty}/>
            <MostRecalled leaderboard={stats.mostSequencesByUser}/>
            <TopScore leaderboard={stats.topScoresPerDifficulty}/>
          </div>
        </section>
      </main>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    stats: state.stats.community
  }),
  { getCommunityStats }
)(Dashboard);