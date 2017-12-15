import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserStats from './UserStats';
import HighestN from './communityStats/HighestN';
import MostRecalled from './communityStats/MostRecalled';
import TopScore from './communityStats/TopScore';
import { getCommunityStats, getUserStats } from './actions';

import './Dashboard.css';
import './UserStats.css';

class Dashboard extends PureComponent {

  componentDidMount() { 
    this.props.getCommunityStats();
    this.props.getUserStats();
  }
  render() {
    const { user, stats, personal } = this.props;

    const styleProps = user ? {
      width: '63%',
      margin: '2.5% 2.5% 2.5% 0'
    } : {
      zIndex: -1,
      width: '90%',
      left: '50%',
      transform: 'translate(-50%)'
    };
    return (
      <main className="dashboard">
        <section className="stats personal-stats" style={styleProps} >
          <h2>personal user stats</h2>
          {user &&
          <div className="personal-leaderboards">
            <UserStats personal={personal}/>
          </div>
          }
        </section>
        <section 
          className="stats community-stats"
          style={styleProps}
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
    personal: state.stats.user,
    stats: state.stats.community
  }),
  { getCommunityStats, getUserStats }
)(Dashboard);