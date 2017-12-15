import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

// import './UserStats.css';

class UserStats extends PureComponent {
  
  render() {
    const { personal } = this.props;
    console.log('user stats personal??',personal);
    
    return personal ? (
      <article className="stats user-stats">
        <h4 className="personal-leaderboard-header">personal stats</h4>
        <div className="personal-leaderboard-stats">
          {Object.keys(personal).map(personalStat => (
            <section key={personalStat} className={`personal-leaderboard-stats-${personalStat}`}>
              <h5 className="">{personalStat}</h5>
              <ul>
                <li>
                  <span className="">{personal[personalStat]} </span>
                </li>
              </ul>
            </section>
          ))}
        </div>
      </article>
    ) : (
      <article className=""></article>
    );
  }
}

export default connect(
  state => ({}),
  null
)(UserStats);