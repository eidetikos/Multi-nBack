import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class PostGame extends PureComponent {
  render() {
    const finalStats = this.props.game.finalStats;
    const user = this.props.user;
    return (
      <div className="post-game">
        <h1>{user}'s Final Stats</h1>
        <div className="leaderboard">
          <h3>LEADERBOARD: {}</h3>
        </div>
        <div className="nBack-Chart"></div>
        <div>
          <h3>Game Stats</h3>
          <ul>
            <li>
              Your highest N achieved: { finalStats.highN }
            </li>
            <li>
              Your average N achieved: { finalStats.avgN }
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    game: state.game,
    user: state.user
  }),
  null
)(PostGame);