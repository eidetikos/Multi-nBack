import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


class MostRecalled extends PureComponent {

  render() {
    const { leaderboard } = this.props;
    return leaderboard ?  ( 
      <article className="community-most-recalled community-leaderboard">
        <h4 className="community-leaderboard-header">Most N-backs Recalled</h4>
        <section className="community-most-recalled-leaderboard">
          <ul>
            {leaderboard.map((leader, i) => (
              <li key={i}>
                <span className="community-leaderboard-username">{leader.name}: </span>
                <span className="community-leaderboard-data">{leader.count}</span>
              </li>
            ))}
          </ul>
        </section>
      </article> 
    ) : (
      <article className="most-recalled"></article> 
    );
  }
}

export default connect(
  state => ({}),
  null
)(MostRecalled);