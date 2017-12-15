import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';

class PostGame extends PureComponent {
  render() {
    const finalStats = this.props.game.finalStats;
    return (finalStats.game ?
      (
        <div className="post-game">
          <h1>{finalStats.user.name}'s Final Stats</h1>
          <div className="leaderboard">
            <h3>LEADERBOARD: {}</h3>
          </div>
          <div className="nBack-Chart">
            <Chart/>
          </div>
          <div>
            <h3>Game Stats</h3>
            <ul>
              <li>
              Your highest N achieved: { finalStats.game.highN }
              </li>
              <li>
              Your average N achieved: { finalStats.game.avgN }
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="post-game"></div>
      ));
  }
}

export default connect(
  state => ({
    game: state.game
  }),
  null
)(PostGame);