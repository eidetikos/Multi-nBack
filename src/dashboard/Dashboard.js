import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserStats from './UserStats';
import HighestN from './communityStats/HighestN';
import MostRecalled from './communityStats/MostRecalled';
import TopScore from './communityStats/TopScore';
import { getCommunityStats, getUserStats } from './actions';

import './Dashboard.css';


class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.props.getCommunityStats();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { user, stats, personal } = this.props;
    
    const styleProps = user ? {
      width: this.state.width >= 1080 ? '63%' : '90%',
      margin: this.state.width >= 1080 ? '2.5% 2.5% 2.5% 0' : '5% auto'
    } : {
      zIndex: -1,
      width: '90%',
    };
    return (
      <main className="dashboard">
        {user &&
          <UserStats personal={personal}/>
        }
        <section 
          className="stats community-stats"
          style={styleProps}
        >
          <h2>community stats</h2>
          <div className="stats community-leaderboards">
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