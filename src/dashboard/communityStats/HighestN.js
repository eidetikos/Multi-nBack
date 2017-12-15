import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class HighestN extends PureComponent {

  render() {
    const { leaderboard } = this.props;

    return leaderboard ?  ( 
      <article className="community-highest-n community-leaderboard">
        <h4 className="community-leaderboard-header">Highest N-backs</h4>
        <div className="community-highest-n-leaderboard">
          {Object.keys(leaderboard).map(difficulty => (
            <section className={`community-highest-n-${difficulty} community-leaderboard-of-highest-n`}>
              <h5 className="community-leaderboard-difficulty-h5">{difficulty}</h5>
              <ul>
                {leaderboard[difficulty].map(leader => (
                  <li>
                    <span className="community-leaderboard-username">{leader.name}: </span>
                    <span className="community-leaderboard-data">{leader.maxN}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </article> 
    ) : (
      <article className="highest-n"></article> 
    );
  }
}

export default connect(
  state => ({}),
  null
)(HighestN);