import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


export class TopScore extends PureComponent {
  
  render() {
    const { leaderboard } = this.props;

    return leaderboard ?  ( 
      <article className="community-top-score community-leaderboard">
        <h4 className="community-leaderboard-header">Top Scores</h4>
        <div className="community-top-score-leaderboard">
          {Object.keys(leaderboard).map(difficulty => (
            <section key={difficulty} className={`community-top-score-${difficulty} community-leaderboard-of-top-score`}>
              <h5 className="community-leaderboard-difficulty-h5">{difficulty}</h5>
              <ul>
                {leaderboard[difficulty].map((leader, i) => (
                  <li key={i}>
                    <span className="community-leaderboard-username">{leader.name}: </span>
                    <span className="community-leaderboard-data">{leader.highestScore}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </article> 
    ) : (
      <article className="top-score"></article> 
    );
  }
}

export default connect(
  state => ({}),
  null
)(TopScore);