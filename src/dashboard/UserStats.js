import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUserStats } from './actions';


export class UserStats extends PureComponent {
  
  componentDidMount() { 
    this.props.getUserStats();
  }
  
  render() {
    const { personal } = this.props;
    
    return personal ? (
      <article className="user-stats stats personal-leaderboard">
        <h2>my stats</h2>
        <div className="personal-leaderboard-stats">
          {Object.keys(personal).map(personalStat => (
            <section key={personalStat} className={`personal-leaderboard-stats-${personalStat} personal-leaderboard-of-all-stats`}>
              <h5 className="personal-leaderboard-stat-name-h5">{personalStat}</h5>
              <p className="personal-leaderboard-stat-data">
                <span >{personal[personalStat]} </span>
              </p>
            </section>
          ))}
        </div>
      </article>
    ) : (
      <article></article>
    );
  }
}

export default connect(
  state => ({}),
  { getUserStats }
)(UserStats);